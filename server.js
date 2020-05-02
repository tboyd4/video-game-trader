// import statements for server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');

// variable declaration
const PORT = process.env.PORT || 8080;
const app = express();

// server.js middleware and use methods
app.use(favicon(__dirname + '/client/build/favicon.ico'));

// lines 14 and 15 will be used later in deployment
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, '/client/build')));

// route that servers our production build out
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/public', 'index.html'));
});

// starts our server listening
app.listen(PORT, () => {
    console.log('Server listening on PORT ' + PORT)
});