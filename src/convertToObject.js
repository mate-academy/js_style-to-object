'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.split(';');
  const result = {};

  properties.forEach((property) => {
    const objProperty = property.trim();

    const [key, value] = objProperty.split(':');

    if (key && value) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
