'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const obj = {};
  const arr = sourceString.split(';');
  const arrSplit = arr.map((el) => el.split(':'));
  const arrTrim = arrSplit.map((el) => el.map((l) => l.trim()));
  const arrFilter = arrTrim.filter((el) => el.length > 1);

  for (let i = 0; i < arrFilter.length; i++) {
    const mass = {};

    mass[arrFilter[i][0]] = arrFilter[i][1];
    Object.assign(obj, mass);
  }

  return obj;
}

module.exports = convertToObject;
