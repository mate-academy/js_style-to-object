'use strict';

function convertToObject(sourceString) {
  const stylesObject = {};

  const someMagic = sourceString.split(';')
    .map(element => element.split(':'));

  someMagic.forEach(string => {
    if (string.length > 1) {
      const key = string[0].trim();
      const value = string[1].trim();

      stylesObject[key] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
