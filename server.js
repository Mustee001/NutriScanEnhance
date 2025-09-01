const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all origins
app.use(cors());

// Serve static files from the current directory
app.use(express.static(__dirname));

// Handle specific routes for the PWA
app.get('/dashboard.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard.html'));
});

app.get('/input.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'input.html'));
});

app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/pricing.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'pricing.html'));
});

// Default route serves index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`NutriScan AI server running on http://0.0.0.0:${PORT}`);
  console.log('PWA is ready for use!');
});