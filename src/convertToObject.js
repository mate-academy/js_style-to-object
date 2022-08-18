'use strict';

function convertToObject(sourceString) {
  const result = {};

  const resultArray = sourceString.split(';').map(el => el.trim())
    .filter(el => el.length > 0)
    .map(el => el.split(':'))
    .map(el => el.map(word => word.trim()));

  resultArray.forEach(([key, value]) => {
    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
