'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const resultObj = {};

  sourceString
    .replace(/\n/g, '')
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el !== '')
    .map((el) => el.split(':').map((item) => item.trim()))
    .forEach((el) => {
      resultObj[el[0]] = el[1];
    });

  return resultObj;
}

module.exports = convertToObject;
