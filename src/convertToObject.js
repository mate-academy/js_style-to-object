'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(properties => properties.split(':'))
    .filter(values => values.length > 1)
    .reduce((prev, [key, value]) => {
      return {
        ...prev,
        [key.trim()]: value.trim(),
      };
    }, {});
}

module.exports = convertToObject;
