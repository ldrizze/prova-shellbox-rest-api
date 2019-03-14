require('dotenv').config(); // setup dotenv
const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080, // process.env.port for hosts enviroment
  bodyParser = require('body-parser');

// setup body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./app/routes');
routes(app); // construct routes

app.listen(port); // start server listening

console.log(`Listening on port: ${port}`);
