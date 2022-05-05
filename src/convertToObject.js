/* eslint-disable max-len */
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
  const obj = {};
  let index = 0;
  let key = '';
  let value = '';
  const arr = sourceString.split(';');
  const arrWithoutSpace = arr.map(el => el.trim());
  const arrWithoutEmptyStr = arrWithoutSpace.filter(el => el.length !== 0);

  arrWithoutEmptyStr.forEach(element => {
    for (let i = 0; i < element.length; i++) {
      if (element[i] === ':') {
        index = i;
      }
    }
    key = element.slice(0, index).trim();
    value = element.slice(index + 1).trim();
    obj[key] = value;
  });

  return obj;
}

module.exports = convertToObject;
