'use strict';

const stylesString = require('./stylesString');

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
  const stylesObject = {};
  const stylesArray = stylesString.split(';').filter(element =>
    element.trim().length);

  for (let i = 0; i < stylesArray.length; i++) {
    const style = stylesArray[i].trim().split(':');

    stylesObject[style[0].trim()] = style[1].trim();
  }

  return stylesObject;
}

module.exports = convertToObject;
