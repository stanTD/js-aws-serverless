'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const _ = require('lodash');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const getParams = () =>{
  return _.clone(
    {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        id: uuid.v1(),
        checked: false
        //createdAt: timestamp,
        //updatedAt: timestamp,
      },
    }
  );
}

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

/*   if (typeof data.text !== 'string') {
    console.error('Validation Failed');
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t add entry.',
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }
    });
    return;
  } */

  const params = getParams();

  console.log(data);

  _.forOwn(data, (value, key) => {
    const item = params.Item;
    item[key] = value;
  });

  console.log(params);

  
  dynamoDb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t create the todo item.',
        headers: {
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        }
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }
    };

    
    callback(null, response);
  });
};
