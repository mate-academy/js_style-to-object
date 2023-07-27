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
  const convertToArr = sourceString.split(';');
  const styleObj = {};

  convertToArr.forEach(el => {
    const convertToStyle = el.split(':');

    if (convertToStyle[1]) {
      styleObj[convertToStyle[0].trim()] = convertToStyle[1].trim();
    }
  });

  return styleObj;
}

module.exports = convertToObject;
