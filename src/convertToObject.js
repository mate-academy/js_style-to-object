'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const declarations = sourceString
    .split(';')
    .filter((item) => item.trim() !== '');
  const result = {};

  for (const declaration of declarations) {
    const [key, value] = declaration.split(':');

    result[key.trim()] = value.trim();
  }

  return result;
}

module.exports = convertToObject;
