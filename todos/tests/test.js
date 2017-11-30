'use strict';

const helpers = require('../helpers.js').data



console.log(helpers.ParamTypes.retrieveBy(["email"]));

console.log(helpers.ParamTypes.retrieveBy(["emaixxl"]));

console.log(helpers.ParamTypes.retrieveBy(["type", "xxx", "id"]));