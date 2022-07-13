'use strict';

/**
 * Implement convertToObject function:
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const sourceArray = sourceString
    .split('\n')
    .filter(x => x !== '' && x !== '  ;')
    .join('').split(';').filter(x => x !== '');

  const test1 = [];
  const test2 = [];
  const result = {};

  sourceArray.forEach(element => {
    test1.push(element.trim().split(':'));
  });

  test1.forEach(element => {
    element.forEach(key => {
      test2.push(key.trim());
    });
  });

  for (let i = 0; i < test2.length; i += 2) {
    result[test2[i]] = test2[i + 1];
  }

  return result;
}

module.exports = convertToObject;
