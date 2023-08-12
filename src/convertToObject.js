'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceObj = sourceString
    .trim()
    .split(';')
    .reduce((properties, property) => {
      if (!property.trim()) {
        return properties;
      }

      const [keyProperty, valueProperty] = property.trim().split(':');

      return {
        ...properties,
        [keyProperty.trim()]: valueProperty.trim(),
      };
    }, {});

  return sourceObj;
}

module.exports = convertToObject;
