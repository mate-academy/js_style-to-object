'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter(value => value.includes(':'))
    .map(value => value.split(':'))
    .reduce((key, value) => {
      key[value[0].trim()] = value[1].trim();

      return key;
    }, {});
}

module.exports = convertToObject;
