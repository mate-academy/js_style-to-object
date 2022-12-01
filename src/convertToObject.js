'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter(property => property.includes(':'))
    .map(property => property.split(':').map(word => word.trim()))
    .reduce((key, value) => {
      key[value[0]] = value[1];

      return key;
    }, {});
}

module.exports = convertToObject;
