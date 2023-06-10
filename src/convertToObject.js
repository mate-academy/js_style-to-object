'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const correctStyles = {};

  const sourceStringSplit = sourceString.split(';');

  sourceStringSplit.map((properties) => {
    if (properties.includes(':')) {
      const [property, value] = properties.split(':');

      correctStyles[property.trim()] = value.trim();
    }
  });

  return correctStyles;
}

module.exports = convertToObject;
