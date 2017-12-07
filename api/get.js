'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const helpers = require('helpers.js');
const _ = require('lodash');

module.exports.get = (event, context, callback) => {

  const app = event.pathParameters.app

  const input = event.lines;

  const fileLines = fileLineParse(input)("lines");

  const startWithFirst = true;

  const filtered = helpers.filterEveryOtherLine(fileLines, startWithFirst);

  const jsonConverter = () => JSON.stringify(result.Item);

  return controllerHelpers.getResponseTemplate(jsonConverter, 200);

};


const controllerHelpers = (() => {

  const getResponseTemplate = (convertToJson, status) => {
    const jsonValue 
    return  _.clone(
      { statusCode: status,
      body: convertToJson() })
  }

})();



