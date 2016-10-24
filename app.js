'use strict';
const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./config/routes.js');

const app = express();

app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/', routes);

app.listen(3000, ()=> {
  console.log('running on http://localhost:3000/');
});
