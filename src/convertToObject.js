'use strict';

function convertToObject(sourceString) {
  const splittedSourceString = sourceString.split(';');
  const convertedStyles = {};

  splittedSourceString.forEach(string => {
    const currentStyle = string.split(':');

    if (currentStyle[1] === undefined) {
      return;
    }

    convertedStyles[currentStyle[0].trim()] = currentStyle[1].trim();
  });

  return convertedStyles;
}

module.exports = convertToObject;
