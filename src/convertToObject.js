'use strict';

function convertToObject(sourceString) {
  const obj = {};

  const arr = sourceString
    .split(';').map(el => el.trim())
    .filter(el => el.length > 0)
    .map(el => el.split(':'))
    .map(el => el.map(word => word.trim()));

  arr.forEach(([key, value]) => {
    obj[key] = value;
  });

  return obj;
}

module.exports = convertToObject;
