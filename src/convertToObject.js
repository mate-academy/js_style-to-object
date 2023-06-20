'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(item => item.trim())
    .map(item => item
      .split(': ')
      .map(part => part.trim()))
    .filter(item => item.length > 1)
    .reduce(
      (object, [property, value]) => ({
        ...object, [property]: value,
      }),
      {});
}

module.exports = convertToObject;
