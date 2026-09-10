'use strict';

function convertToObject(sourceString) {
  const convert = sourceString.split(';');
  const stylesObject = {};

  convert.forEach((line) => {
    if (line.trim() === '') {
      return;
    }

    const parts = line.split(':');

    stylesObject[parts[0].trim()] = parts[1].trim();
  });

  return stylesObject;
}

module.exports = convertToObject;
