'use strict';

function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').filter(value => value.trim())
    .map(value => value.split(':'))
    .map(value => [value[0].trim(), value[1].trim()])
    .forEach(value => {
      result[value[0]] = value[1];
    });

  return result;
}

module.exports = convertToObject;
