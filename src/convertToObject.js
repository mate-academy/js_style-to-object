'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedObj = {};

  sourceString
    .split(';')
    .map((properties) => properties.trim())
    .filter((properties) => properties)
    .forEach((properties) => {
      const [property, value] = properties.split(':');

      if (property && value) {
        convertedObj[property.trim()] = value.trim();
      }
    });

  return convertedObj;
}

module.exports = convertToObject;
