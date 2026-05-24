'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const properties = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter(Boolean);

  for (const property of properties) {
    const [key, value] = property.split(':').map((item) => item.trim());

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
