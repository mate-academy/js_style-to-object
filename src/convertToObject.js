'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.trim().split(';');
  const finalProperties = {};

  properties.map((property) => {
    if (property.trim().length > 0) {
      const [key, value] = property.split(':');

      finalProperties[key.trim()] = value.trim();
    }
  });

  return finalProperties;
}

module.exports = convertToObject;
