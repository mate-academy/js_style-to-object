'use strict';

function convertToObject(sourceString) {
  const stylesListArray = sourceString
    .split(';')
    .filter((str) => str.trim() !== '')
    .map((styles) => styles.split(':').map((style) => style.trim()));

  const stylesListObject = Object.fromEntries(stylesListArray);

  return stylesListObject;
}

module.exports = convertToObject;
