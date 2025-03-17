'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitedArray = sourceString.split(';');

  const result = splitedArray.reduce((acc, property) => {
    const [cssProperty, value] = property.trim().split(':');

    if (value !== undefined) {
      acc[cssProperty.trim()] = value.trim();
    }

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
