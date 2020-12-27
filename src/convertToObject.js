'use strict';

function convertToObject(sourceString) {
  const styledObj = {};

  sourceString
    .split(';')
    .map(property => property.split(':'))
    .map(([key, value]) =>
      ((key && value) ? (styledObj[key.trim()] = value.trim()) : false));

  return styledObj;
}

module.exports = convertToObject;
