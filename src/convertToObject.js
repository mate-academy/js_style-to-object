'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 *  CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resObject = {};
  const strArr = sourceString
    .split(';')
    .filter(item => item.trim().length > 0)
    .map(item => item.split(':'));

  for (const elem of strArr) {
    resObject[elem[0].trim()] = elem[1].trim();
  }

  return resObject;
}

module.exports = convertToObject;
