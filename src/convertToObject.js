'use strict';

function convertToObject(sourceString) {
  const stylesObject = {};

  const someMagic = sourceString.split(';')
    .map(element => element.split(':'));

  someMagic.forEach(array => {
    if (array.length > 1) {
      const key = array[0].trim();
      const value = array[1].trim();

      stylesObject[key] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
