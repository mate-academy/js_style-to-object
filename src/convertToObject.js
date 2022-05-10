'use strict';

/**
 * Implement convertToObject function:
 *
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
  const splited = sourceString.split(/:|;/).map(el => el.trim())
    .filter(el => el !== '');
  const newObj = {};

  for (let i = 0; i < splited.length; i += 2) {
    newObj[splited[i]] = splited[i + 1];
  }

  return newObj;
}

module.exports = convertToObject;
