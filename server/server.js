const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const getAll = require('./routes.js').getAll;

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());

app.get('/menus', (req, res) => {
  getAll((err, results) => {
    if (err) {
      console.log('Error on calling getAll', err);
    }
    res.send(JSON.stringify(results));
  });
});

module.exports = app;
