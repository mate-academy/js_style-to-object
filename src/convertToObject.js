'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length <= 1) {
    return {};
  }

  const elements = sourceString.trim().split(';');

  const result = elements.reduce((acc, element) => {
    const property = element.split(':');

    if (property.length === 2) {
      const key = property[0].trim();
      const value = property[1].trim();

      acc[key] = value;
    }

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
