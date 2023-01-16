'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (
 * see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const arr = sourceString.split(';');
  let key;
  let prop;

  arr.map(pairStr => {
    if (pairStr.split('').some(ch => ch === ':')) {
      const newArr = pairStr.split(':').map(s => s.trim());

      key = newArr[0];
      prop = newArr[1];

      result[key] = prop;
    }
  });

  return result;
}

module.exports = convertToObject;
