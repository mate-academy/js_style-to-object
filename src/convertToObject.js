'use strict';

const COLON = ':';
const SEMICOLON = ';';

function convertToObject(sourceString) {
  return sourceString
    .split(SEMICOLON)
    .reduce(convertToProperty, {});
}

function convertToProperty(stringToObject, element) {
  const [key, value] = element
    .split(COLON)
    .map(partOfElement => partOfElement.trim());

  if (key) {
    stringToObject[key] = value;
  }

  return stringToObject;
}

module.exports = convertToObject;
