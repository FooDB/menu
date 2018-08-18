// 3rd party imports
const nr = require('newrelic');
const express = require('express');
const path = require('path');
const compression = require('compression');
const redis = require('redis');
// const cluster = require('cluster');
const app = express();
// const bodyParser = require('body-parser');


// 1st party imports 
const model = require('./model.js');

// set up clusters
// if (cluster.isMaster) {
  // console.log(`Master ${process.pid} is running`);

  // Fork workers.
  // for (let i = 0; i < 2; i++) {
  //   cluster.fork();
  // }
  // cluster.on('exit', (worker, code, signal) => {
  //   console.log(`worker ${worker.process.pid} died`);
  // });
// } else {
  // console.log(`Worker ${process.pid} started`);
  // set up redis
  const client = redis.createClient();
  
  client.on('error', function (err) {
    console.log("Error " + err);
  });
  
  app.use(compression());
  
  // app.use(express.static(path.join(__dirname, '../public')));
  
  app.use('/restaurant/:id/', express.static(path.join(__dirname, '../public')));
  
  // app.use(bodyParser.json());
  
  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header('Access-Control-Allow-Headers', '*');
  //   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET');
  //   next();
  // });
  
  // Read
  let redisCount = 0;
  // let cassCount = 0;
  app.get('/api/restaurant/:id', (req, res) => {
    const searchId = req.params.id;
    client.get(searchId, function(error, result) {
      if (result) {
        // console.log('redis data: ', result);
        res.send(result);
      } else {
        model.getData(searchId, (err, results) => {
          if (err) {
            console.log(err);
          }
          // console.log('here');
          // console.log('Cass data: ', cassCount++);
          client.set(searchId, JSON.stringify(results.submenus));
          res.send(results.submenus);
        });
      }
    });
  });
  
  // Create
  // app.post('/create/restaurant', (req, res) => {
  //   model.insertData(req.body);
  //   res.send('completed insert');
  // });
  
  // Update
  // app.put('/update/restaurant', (req, res) => {
  //   console.log('body: ', req.body);
  //   model.updateData(req.body);
  //   res.send('completed update')
  // });
  
  // Delete
  // app.delete('/delete/restaurant/:id', (req, res) => {
  //   model.deleteData(req.params.id)
  //   res.send('deleted item');
  // });
  const port = 3003;
  app.listen(port, () => console.log(`Server listening on ${port}`));
// }
