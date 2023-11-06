/* eslint-disable max-len */
'use strict';

function convertToObject(sourceString) {
  const stylesArray = sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style.length > 0);

  const stylesObject = {};

  for (const style of stylesArray) {
    const [property, value] = style.split(':').map((part) => part.trim());

    if (property) {
      stylesObject[property] = value;
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
