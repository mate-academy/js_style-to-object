'use strict';

function convertToObject(sourceString) {
  const sourceArray = sourceString
    .split(';\n')
    .map(element => element.split(':'));

  const stylesObject = {};

  sourceArray.forEach(property => {
    if (property.length === 2) {
      const key = property[0].trim();
      const value = property[1].trim();

      stylesObject[key] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
