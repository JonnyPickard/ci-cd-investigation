const express = require('express');

const app = express();

app.get('*', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, (err) => {
  if (err) { console.error(err); }
  console.log('express app listening on port 3000');
});

module.exports = app;
