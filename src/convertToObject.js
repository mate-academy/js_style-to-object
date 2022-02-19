'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = [];
  const resultTest = [];
  const arr = sourceString.split(';');

  for (let i = 0; i < arr.length - 1; i++) {
    const newArr = arr[i].split(':');
    const withoutSpace = [];

    for (let a = 0; a < newArr.length; a++) {
      withoutSpace.push(newArr[a].trim());
    }

    result.push(withoutSpace);
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i].length !== 1) {
      resultTest.push(result[i]);
    }
  }

  const obj = Object.fromEntries(resultTest);

  return obj;
}

module.exports = convertToObject;
