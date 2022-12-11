'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newString = sourceString.split(';').join(':');
  const object = newString.split(':');
  const objectClear = object.map(style => style.trim());
  const resultObj = {};

  for (let i = 0; i < objectClear.length - 1; i += 2) {
    if (objectClear[i + 1] !== '' || objectClear[i] !== '') {
      resultObj[objectClear[i]] = objectClear[i + 1];
    }
  }

  return resultObj;
}

module.exports = convertToObject;
