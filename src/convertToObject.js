'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  const oneString = sourceString
    .split(';')
    .map((str) => str.trim())
    .filter((str) => str);

  oneString.forEach((str) => {
    const [key, value] = str.split(':').map((part) => part.trim());

    if (key && value) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
