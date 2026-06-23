'use strict';

function convertToObject(stylesString) {
  return stylesString
    .split(';')
    .map((line) => line.trim())
    .filter(Boolean)
    .reduce((acc, line) => {
      const [property, value] = line.split(':');

      if (!property || !value) {
        return acc;
      }

      acc[property.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
