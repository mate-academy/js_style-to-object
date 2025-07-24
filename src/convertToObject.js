'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const declarations = sourceString.split(';');

  for (const ch of declarations) {
    const [prop, value] = ch.split(':');

    if (prop && value) {
      result[prop.trim()] = value.trim();
    }
  }

  return result;
  // write your code here
}

module.exports = convertToObject;
