'use strict';
var express = require('express');
var graphqlHTTP = require('express-graphql');
var schema = require('./schema');

var app = express();

app.use('/', graphqlHTTP({ schema: schema, graphiql: true }));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
