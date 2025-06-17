'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const arr = sourceString.split(';');

  const obj1 = {};

  arr.map((item) => {
    const [key, value] = item.split(':').map((part) => part.trim());

    if (key && value !== undefined) {
      obj1[key] = value;
    }
  });

  return obj1;
}

module.exports = convertToObject;
