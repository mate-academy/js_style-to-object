'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .reduce((objWithStyles, style) => {
      const [property, value] = style.split(':');

      if (value) {
        return {
          ...objWithStyles,
          [property.trim()]: value.trim(),
        };
      }

      return {
        ...objWithStyles,
      };
    }, {});
}

module.exports = convertToObject;
