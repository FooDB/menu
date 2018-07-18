const express = require('express');
const path = require('path');
const app = express();
const port = 3003;

//servinc static files
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log(`Server listening on ${port}`));