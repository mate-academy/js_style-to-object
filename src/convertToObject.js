'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styleObj = {};
  let newStr = sourceString.replace(/[\r\n]+/g, '').split(';');

  newStr = newStr.map((str) => str.trim().split(':'));

  newStr.forEach((str) => {
    if (str[0] !== '') {
      styleObj[str[0].trim()] = `${str[1]}`.trim();
    }
  });

  return styleObj;
}

module.exports = convertToObject;
