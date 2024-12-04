'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
    .forEach((item) => {
      const [key, ...valueParts] = item.split(':');

      if (key && valueParts.length) {
        const value = valueParts.join(':').trim();

        result[key.trim()] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
