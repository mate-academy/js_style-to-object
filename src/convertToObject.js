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
  const tempArr = sourceString.split(';').join(':').split(':');
  const finalArr = [];
  const result = {};

  for (let i = 0; i < tempArr.length; i++) {
    tempArr[i] = tempArr[i].trim();

    if (tempArr[i] !== '') {
      finalArr.push(tempArr[i]);
    }
  }

  for (let i = 0; i < finalArr.length; i += 2) {
    result[finalArr[i]] = finalArr[i + 1];
  }

  return result;
}

module.exports = convertToObject;
