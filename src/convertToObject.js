'use strict';

function convertToObject(sourceString) {
  const obj = {};

  const result = sourceString
    .split(';')
    .filter(el => el.includes(':'))
    .map(el => el.split(':'));

  for (const el of result) {
    obj[el[0].trim()] = el[1].trim();
  }

  return obj;
}

module.exports = convertToObject;
