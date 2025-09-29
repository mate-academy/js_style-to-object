'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const newObj = {};
  const keyValuePairs = sourceString.split(';');

  keyValuePairs.forEach((pair) => {
    const [key, value] = pair.split(':');

    if (key && value) {
      newObj[key.trim()] = value.trim();
    }
  });

  return newObj;
}

module.exports = convertToObject;
