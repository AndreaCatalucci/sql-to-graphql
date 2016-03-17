var express = require('express');
var graphqlHTTP = require('express-graphql');
import schema from './schema';

var app = express();

app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
