'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.split(';');

  const result = properties.reduce((acc, property) => {
    const [cssProperty, value] = property.trim().split(':');

    if (value !== undefined) {
      acc[cssProperty.trim()] = value.trim();
    }

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
