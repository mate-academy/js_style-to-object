'use strict';

function convertToObject(sourceString) {
  const sourceObject = {};

  sourceString.split(';').forEach(item => {
    const declaration = item.split(':');

    if (declaration.length === 2) {
      sourceObject[declaration[0].trim()] = declaration[1].trim();
    }
  });

  return sourceObject;
}

module.exports = convertToObject;
