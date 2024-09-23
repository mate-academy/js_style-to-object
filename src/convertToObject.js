'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.split(';');
  const result = {};

  properties.forEach((element) => {
    const [property, value] = element.split(':');

    if (property && value) {
      result[property.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
