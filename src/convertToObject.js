'use strict';

function convertToObject(sourceString) {
  const sourceStringArray = sourceString
    .split(';')
    .map(styleString => styleString.trim().split(':'))
    .filter(a => a.length > 1);

  const sourceStringObject = sourceStringArray
    .reduce((resultObject, arrayElement) => ({
      ...resultObject,
      [arrayElement[0].trim()]: arrayElement[1].trim(),
    }), {});

  return sourceStringObject;
}

module.exports = convertToObject;
