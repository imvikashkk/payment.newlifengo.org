zz
const express = require('express');
const app = express();

// Redirect all incoming requests to Razorpay link
app.get('/*', (req, res) => {
  res.redirect(301, 'https://razorpay.me/@newlifewf');
});

// Start the server on port 80 (or 3000 for local dev)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Redirect server is running on port ${PORT}`);
});
