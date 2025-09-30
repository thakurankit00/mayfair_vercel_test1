#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Vercel deployment preparation...\n');

// Check if required files exist
const requiredFiles = [
  'vercel.json',
  'backend/index.js',
  'backend/package.json',
  'frontend/package.json'
];

console.log('📋 Checking required files...');
for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    console.error(`❌ Missing required file: ${file}`);
    process.exit(1);
  }
  console.log(`✅ Found: ${file}`);
}

console.log('\n📦 Installing dependencies...');

try {
  // Install backend dependencies
  console.log('Installing backend dependencies...');
  execSync('npm install', { cwd: 'backend', stdio: 'inherit' });
  
  // Install frontend dependencies
  console.log('Installing frontend dependencies...');
  execSync('npm install', { cwd: 'frontend', stdio: 'inherit' });
  
  // Build frontend
  console.log('Building frontend...');
  execSync('npm run build:production', { cwd: 'frontend', stdio: 'inherit' });
  
  console.log('\n✅ Build completed successfully!');
  console.log('\n📝 Next steps:');
  console.log('1. Install Vercel CLI: npm install -g vercel');
  console.log('2. Login to Vercel: vercel login');
  console.log('3. Deploy: vercel --prod');
  console.log('\n🔧 Don\'t forget to set your environment variables in Vercel dashboard:');
  console.log('   - DATABASE_URL');
  console.log('   - SUPABASE_URL');
  console.log('   - SUPABASE_ANON_KEY');
  console.log('   - JWT_SECRET');
  console.log('   - And any other required environment variables');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

