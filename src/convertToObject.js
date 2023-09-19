'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrSourse = sourceString.split('\n');
  const convertedObj = {};

  for (let i = 0; i < arrSourse.length; i++) {
    const element = arrSourse[i].replace(';', '').trim();

    if (element === '' || element === ';') {
      continue;
    }

    const part = element.split(':');

    const key = part[0].trim();
    const value = part[1].trim();

    convertedObj[key] = value;
  }

  return convertedObj;
}

module.exports = convertToObject;
