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
  let arrWithPairs = sourceString.split('\n').join('');
  let result = {};

  arrWithPairs = arrWithPairs.split(';').map((e) => e.split(':'));

  arrWithPairs = arrWithPairs.map((e) => e.map(word => word.trim()));
  // array with pairs of properties-keys without exstra spaces

  result = arrWithPairs.reduce((prev, pair) => {
    if (pair.length === 2) {
      prev[pair[0]] = pair[1];
    }

    return prev;
  }, {});

  return result;
}

module.exports = convertToObject;
