'use strict';

const helpers = (function() {

    const _ = require('lodash');
    
    const retrieveByFields = [
        "email",
        "id",
        "type"
    ]

    const filterByFields = _.concat(retrieveByFields, [
        "email",
        "id",
        "type",
        "status",
        "city",
        "country"
    ]);

    const outputFields = _.concat(filterByFields, [

    ]);

    const canProceed = (availableOptions, inputOptions) => _.reduce([availableOptions, inputOptions], (output, input) => {
        return output == true ? input && input.length > 0 : output;
    });
    
    const oneOf = (availableOptions) => (inputOptions) => {
        if (canProceed(availableOptions, inputOptions)) {
            const firstMatch = _.head(availableOptions.filter(element => inputOptions.includes(element)));
            return firstMatch ? firstMatch : "";
        }
        else {
            return "";
        }
    }
    
    const ParamTypes = {
        retrieveBy : oneOf(retrieveByFields),
    
    }

    const filter = function(input) {
        return input;
    };

    const split = function(input) {
        return _.split(input, ',');
    }

    return {
        filter : filter,
        ParamTypes : ParamTypes,
        retrieveByFields : retrieveByFields,

    }

})();


exports.data = helpers;

