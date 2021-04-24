'use strict';

const dynamoose = require('dynamoose');

const personModel = new dynamoose.Schema({
  id: String,
  firstName: String,
  lastName: String
});

module.exports = dynamoose.model('persons', personModel);