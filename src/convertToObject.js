'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const declarations = sourceString.split(';');

  for (const declaration of declarations) {
    const cleaned = declaration.trim();

    if (cleaned === '') {
      continue;
    }

    const [prop, value] = cleaned.split(':');

    if (prop && value) {
      result[prop.trim()] = value.trim();
    }
  }

  return result;
  // write your code here
}

module.exports = convertToObject;
