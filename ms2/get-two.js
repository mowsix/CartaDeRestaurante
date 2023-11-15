const express = require('express');
const app = express();
const db = require('../db/db');
const port = 3002;

app.get('/getTwo', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST');
  res.set('Access-Control-Allow-Headers', '*');
  const id = Number(req.query.id);
  const itemById = db.getById(id);
  res.send(itemById);
})

app.listen(port, () => {
  console.log(`Service 2 listening at http://localhost:${port}`);
});