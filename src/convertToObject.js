'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
* and values are the values of related CSS properties (see an exampl i
n [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let obj = {};

  const deleteLine = sourceString.split('\n');

  const stringTrim = deleteLine.map((element) => element.trim());

  let deleteLastChar = stringTrim.map((element) => element.slice(0, -1));

  deleteLastChar = deleteLastChar.filter((element) => element !== '');

  const splitStringArr = deleteLastChar.map((element) => element.split(': '));

  const del = splitStringArr.map((element) => element.map((el) => el.trim()));

  for (let i = 0; i < del.length; i++) {
    obj = Object.fromEntries(del);
  }

  return obj;
}

module.exports = convertToObject;
