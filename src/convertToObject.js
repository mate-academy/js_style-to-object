'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach(item => {
    const correctString = item.split(':').map(word => word.trim(''));

    if (correctString[1]) {
      result[correctString[0]] = correctString[1];
    }
  });

  return result;
}

module.exports = convertToObject;
