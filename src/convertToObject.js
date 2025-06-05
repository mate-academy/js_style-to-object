'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  const rules = sourceString.split(';');

  for (const rule of rules) {
    const [property, value] = rule.split(':').map((item) => item.trim());

    if (property && value) {
      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
