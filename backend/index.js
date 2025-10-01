/**
 * Vercel Entry Point for Mayfair Hotel Management System
 *
 * Simplified version that works reliably in serverless environment
 */

require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const db = require('./src/config/database');


const app = express();

// Basic middleware for Vercel
app.set('trust proxy', 1);

// Security middleware (simplified for serverless)
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));

// CORS configuration
app.use(cors({
  origin: [
    'http://localhost:3001',
    'http://localhost:3002',
    process.env.CORS_ORIGIN,
    'https://mayfair-hotel.vercel.app'
  ].filter(Boolean),
  credentials: true
}));

// Basic middleware
app.use(compression());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      status: 'OK',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'production',
      version: '1.0.0'
    }
  });
});

// Mirror health endpoint under /api for consistency with external checks
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      status: 'OK',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'production',
      version: '1.0.0'
    }
  });
});


// Simple test endpoint
app.get('/api/test', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is working!',
    timestamp: new Date().toISOString()
  });
});

// Database health check
app.get('/api/db-health', async (req, res) => {
  try {
    const result = await db.raw('SELECT 1 as ok');
    const ok = result?.rows ? result.rows[0]?.ok : (Array.isArray(result) ? (result[0]?.ok ?? result[0]?.[0]?.ok) : 1);
    res.status(200).json({ success: true, data: { db: 'up', ok } });
  } catch (error) {
    res.status(500).json({ success: false, error: { code: 'DB_UNAVAILABLE', message: error.message } });
  }
});

// Import and auto-mount routes (vercel-friendly, per-file safe)
try {
  const fs = require('fs');
  const routesDir = path.join(__dirname, 'src', 'routes');
  const files = fs.readdirSync(routesDir).filter((f) => f.endsWith('.js'));
  const baseOverrides = { notificationRoutes: 'notifications' };

  files.forEach((file) => {
    const name = file.replace(/\.js$/i, '');
    const base = baseOverrides[name] || name;
    try {
      const router = require(path.join(routesDir, file));
      if (router && typeof router === 'function') {
        app.use(`/api/v1/${base}`, router);
        console.log(`Mounted /api/v1/${base}`);
      } else {
        console.warn(`Skipped ${file}: export is not an Express router`);
      }
    } catch (err) {
      console.log(`Route "${file}" not available: ${err.message}`);
    }
  });
} catch (error) {
  console.error('Error loading routes:', error);

  // Fallback API endpoint
  app.use('/api/*', (req, res) => {
    res.status(503).json({
      success: false,
      error: {
        code: 'SERVICE_UNAVAILABLE',
        message: 'API routes are temporarily unavailable'
      }
    });
  });
}

// Serve React static files
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Catch-all handler: serve React app for any non-API routes
app.get('*', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'STATIC_FILE_ERROR',
        message: 'Unable to serve frontend files'
      }
    });
  }
});

// Global error handler
app.use((error, req, res, next) => {
  console.error('Global error:', error);
  res.status(500).json({
    success: false,
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Something went wrong'
    }
  });
});

// Export for Vercel (serverless)
module.exports = app;

