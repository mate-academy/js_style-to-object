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
  const stylesArr = sourceString.split(';');

  const arr = [...stylesArr].map(style => style.split(':'));

  const stylesObj = {};

  for (const part of arr) {
    if (part[0] && part[1]) {
      stylesObj[part[0].trim()] = part[1].trim();
    }
  }

  return stylesObj;
}

module.exports = convertToObject;
