'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (
 * see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const obj = {};
  let prop = [];
  const strToArr = sourceString.split(';').map(key => key.trim());

  for (let i = 0; i < strToArr.length; i++) {
    prop = strToArr[i].split(':').map(key => key.trim());

    if (prop[0] && prop[1]) {
      obj[prop[0]] = prop[1];
    }
  }

  return obj;
}

module.exports = convertToObject;
