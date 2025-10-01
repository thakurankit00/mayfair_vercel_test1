// Generic Vercel entry to make branch deploys work even without vercel.json
// Exposes the Express app exported by backend/index.js as a Serverless Function

const app = require('../backend/index.js');

// Vercel Node serverless functions accept a (req, res) handler; Express app is compatible
module.exports = app;

