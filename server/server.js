const express = require('express');
const path = require('path');
const app = express();
const port = 3003;

//Import Body Parser;
var bodyParser = require('body-parser')


//servinc static files
app.use(express.static(path.join(__dirname, '../public')));

//use body parser
app.use(bodyParser.json());

app.get('/menus', (req, res) => {
  console.log('Get method working');
  res.send('Get sending back data!')
});

app.listen(port, () => console.log(`Server listening on ${port}`));