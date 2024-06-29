'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssPropertiesAndValues = sourceString.split(';');
  const result = {};

  cssPropertiesAndValues.forEach((propertyValuePair) => {
    const trimmedItem = propertyValuePair.trim();

    if (trimmedItem.length < 4) {
      return;
    }

    const [key, value] = trimmedItem.split(':');

    if (key && value) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
