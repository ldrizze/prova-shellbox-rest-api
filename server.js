const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080, // process.env.port for hosts enviroment
  bodyParser = require('body-parser');


const routes = require('./app/routes');
routes(app); // construct routes

// setup body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port); // start server listening

console.log(`Listening on port: ${port}`);