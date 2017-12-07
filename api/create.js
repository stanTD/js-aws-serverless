'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const _ = require('lodash');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const helpers = require('./helpers.js');

const getParams = () =>{
  return _.clone(
    {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        id: uuid.v1(),
        text: data.text,
        checked: false,
        createdAt: timestamp,
        updatedAt: timestamp,
      },
    }
  );
}

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  if (typeof data.text !== 'string') {
    console.error('Validation Failed');
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t add entry.',
    });
    return;
  }


  _.forOwn(data, (value, key) ={

  })

  const params = getParams();

  _.forOwn(data, (value, key) => {
    params[key] = value;
  });

  
  dynamoDb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t create the todo item.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };

    
    callback(null, response);
  });
};
