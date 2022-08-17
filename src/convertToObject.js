'use strict';

function convertToObject(sourceString) {
  const entriesArray = sourceString
    .split(';')
    .map((properties) => properties.split(':')
      .map((parts) => parts.trim()))
    .filter((part) => part.length === 2)
    .map(([key, value]) => ({ [key]: value }));

  const cssFile = Object.assign({}, ...entriesArray);

  return cssFile;
}

module.exports = convertToObject;
