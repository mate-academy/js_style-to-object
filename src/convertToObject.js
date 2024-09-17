'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const array = sourceString.split(';').map((item) => item.trim());

  const result = array.reduce((accumulator, currentValue) => {
    const [key, value] = currentValue.split(':').map((item) => item.trim());

    accumulator[key] = value;

    return accumulator;
  }, {});

  return result;
}

module.exports = convertToObject;
