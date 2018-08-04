const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const getData = require('./routes.js');

app.use(express.static(path.join(__dirname, '../public')));

app.use('/restaurant/:id/', express.static('../public'));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET');
  next();
});

app.get('/api/restaurant/:id', (req, res) => {
  if (!isNaN(Number(req.params.id))) {
    getData(req.params.id, (err, results) => {
      if (err) {
        console.log(err);
      }
      res.send(JSON.stringify(results));
    });
  }
});

module.exports = app;
