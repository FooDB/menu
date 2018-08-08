// 3rd party imports
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

// 1st party imports 
const getData = require('./model.js');

app.use(express.static(path.join(__dirname, '../public')));

app.use('/restaurant/:id/', express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET');
  next();
});

// Read
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

// Create
app.post('/api/restaurant/:id', (req, res) => {
  if (!isNaN(Number(req.params.id))) {
    getData(req.params.id, (err, results) => {
      if (err) {
        console.log(err);
      }
      res.send(JSON.stringify(results));
    });
  }
});

// Update

// Delete

const port = 3003;
app.listen(port, () => console.log(`Server listening on ${port}`));

// module.exports = app;
