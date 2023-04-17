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
  const strArr = sourceString.split('\n');

  for (let i = 0; i < strArr.length; i++) {
    if (!strArr[i]) {
      continue;
    }

    const params = strArr[i].split(':');

    if (params.length <= 1) {
      continue;
    }

    const key = params[0].trim();
    const value = params[1].slice(0, -1).trim();

    resultObj[key] = value;
  }

  return resultObj;
}

module.exports = convertToObject;
