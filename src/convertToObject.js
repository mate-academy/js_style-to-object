'use strict';

/**
 * Implement convertToObject function
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfProperties = sourceString.split(';');
  const objectWithProperties = {};

  arrayOfProperties
    .filter(prop => prop.trim())
    .map(style => {
      const keyValue = style.split(':');

      objectWithProperties[keyValue[0].trim()] = keyValue[1].trim();
    });

  return objectWithProperties;
}

module.exports = convertToObject;
