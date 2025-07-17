'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const slicedProperties = sourceString.split(';');
  const result = {};
  const nonEmptyProperties = slicedProperties.filter(function (prop) {
    const trimmedProp = prop.trim();

    return trimmedProp !== '';
  });

  nonEmptyProperties.forEach(function (property) {
    const parts = property.split(':');

    if (parts.length >= 2) {
      const key = parts[0].trim();
      const value = parts[1].trim();

      if (key !== '' && value !== '') {
        result[key] = value;
      }
    }
  });

  return result;
}

module.exports = convertToObject;
