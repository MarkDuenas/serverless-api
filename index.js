'use strict';

const uuid = require('uuid').v4
const personModel = require('./schema.js');

exports.handler = async (event) => {

  console.log(JSON.stringify(event, undefined, 2));
  try {
    const body = JSON.parse(event.body);
    const {firstName, lastName} = body;
    const id = uuid();

    const newPerson = new personModel({id, firstName, lastName})
    const data = await newPerson.save();
    const result = JSON.stringify(data);

    return{
      statusCode: 201,
      body: result
    }
  } catch (e) {
    return{
      statusCode: 500,
      body: e.message
    }
  }

}