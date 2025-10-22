'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const regex = /([-\w]+)\s*:\s*([^;]+);?/g;
  let match;

  while ((match = regex.exec(sourceString)) !== null) {
    const key = match[1].trim();
    const value = match[2].trim();

    if (key) {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
