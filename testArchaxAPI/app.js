const express = require('express');
const app = express();

app.get('/get-inventory', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});



module.exports = app;