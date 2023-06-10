'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  const sourceStringSplit = sourceString.split(';');

  sourceStringSplit.map((properties) => {
    if (properties.includes(':')) {
      const [property, value] = properties.split(':');

      obj[property.trim()] = value.trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
