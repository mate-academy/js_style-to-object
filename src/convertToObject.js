'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((stylesObject, line) => {
    if (line.includes(':')) {
      const [property, value] = line.split(':');
      const newProperty = property.trim();
      const newValue = value.trim();

      stylesObject[newProperty] = newValue;
    }

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
