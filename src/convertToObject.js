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
  const sourceArr = sourceString.split(';').map(prop => prop.split(':'));
  const stylesObj = {};

  sourceArr.forEach(el => {
    const key = el[0] || 0;
    const value = el[1] || 0;

    if (key && value) {
      stylesObj[key.trim()] = value.trim();
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
