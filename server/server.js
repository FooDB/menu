const express = require('express');
const path = require('path');
const app = express();
const port = 3003;

const getAll = require('./routes.js').getAll;

//Import Body Parser;
var bodyParser = require('body-parser');

//servinc static files
app.use(express.static(path.join(__dirname, '../public')));

//use body parser
app.use(bodyParser.json());

app.get('/menus', (req, res) => {
  getAll((err, results) => {
  	if (err) {
  	  console.log('Error on calling getAll', err);
  	}
  	res.send(JSON.stringify(results));
  })

});

app.listen(port, () => console.log(`Server listening on ${port}`));