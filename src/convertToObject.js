'use strict';

function convertToObject(sourceString) {
  const newStylesObject = {};

  sourceString
    .split(';')
    .filter(style => style.trim())
    .forEach(key => {
      const [ name, value ] = key.split(':');

      newStylesObject[name.trim()] = value.trim();
    });

  return newStylesObject;
}

module.exports = convertToObject;
