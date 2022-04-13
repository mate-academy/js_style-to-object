'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string
 *  with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const pairArr = sourceString.split(';');
  const splitePairArr = pairArr.map(x => x.split(':'));
  const withoutEmptyArr = splitePairArr.filter(x => x.length === 2);
  const trimElementArr = [];

  for (let i = 0; i < withoutEmptyArr.length; i++) {
    withoutEmptyArr[i][0] = withoutEmptyArr[i][0].trim();
    withoutEmptyArr[i][1] = withoutEmptyArr[i][1].trim();
    trimElementArr.push(withoutEmptyArr[i]);
    result[trimElementArr[i][0]] = trimElementArr[i][1];
  };

  return result;
}

module.exports = convertToObject;
