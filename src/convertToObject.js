'use strict';

function convertToObject(sourceString) {
  const sourceObject = {};

  sourceString
    .split(';')
    .map(element => element.trim())
    .filter(element => element !== '')
    .map(element => {
      const [properties, value] = element.split(':');

      sourceObject[(properties.trim())] = (value.trim());
    });

  return sourceObject;
}

module.exports = convertToObject;
