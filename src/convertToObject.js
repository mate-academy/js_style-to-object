'use strict';

function convertToObject(sourceString) {
  const result = {};

  const resultArray = sourceString
    .split(';')
    .map(row => row.trim())
    .filter(item => item.length > 0)
    .map(style => style.split(':'))
    .map(style => style.map(item => item.trim()));

  resultArray.forEach(([key, value]) => {
    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
