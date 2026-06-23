'use strict';

function convertToObject(stylesString) {
  return stylesString
    .split(';')
    .map((line) => line.trim())
    .filter(Boolean)
    .reduce((stylesObject, line) => {
      const [property, value] = line.split(':');

      if (!property || !value) {
        return stylesObject;
      }

      return {
        ...stylesObject,
        [property.trim()]: value.trim(),
      };
    }, {});
}

module.exports = convertToObject;
