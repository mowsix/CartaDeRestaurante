const express = require('express');
const app = express();
const db = require('../db/db');
const port = 3001;

app.get('/getOne', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
  res.set('Access-Control-Allow-Headers', '*');
  const allItems = db.getAll();
  res.send(allItems)
})

app.listen(port, () => {
  console.log(`Service 1 listening at http://localhost:${port}`);
});