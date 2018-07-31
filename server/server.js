const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const getData = require('./routes.js');

app.use(express.static(path.join(__dirname, '../public')));

app.use('/restaurant/:id/', express.static('public'));

app.use(bodyParser.json());

app.get('/api/restaurant/:id', (req, res) => {
  getData(req.params.id, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(JSON.stringify(results));
  });
});

module.exports = app;
