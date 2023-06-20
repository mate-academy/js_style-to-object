'use strict';

function convertToObject(sourceString) {
  const cssObject = {};
  const cssRules = sourceString
    .split(';')
    .filter(element => element.trim())
    .map(element => element.split(':'));

  for (const [key, value] of cssRules) {
    cssObject[key.trim()] = value.trim();
  }

  return cssObject;
}

module.exports = convertToObject;
