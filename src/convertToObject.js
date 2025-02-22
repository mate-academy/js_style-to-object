'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');
  const result = {};

  for (const oneString of styleDeclarations) {
    const [property, value] = oneString.split(':');

    if (value !== undefined) {
      result[property.trim()] = value.trim();
    }
  }

  return result;
}

module.exports = convertToObject;
