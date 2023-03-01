'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *  in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 *  properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(item => item
      .split(':')
      .map(el => el.trim()))
    .filter(item => item.length > 1)
    .reduce((obj, [key, value]) => {
      obj[key] = value;

      return {
        ...obj,
        [key]: value,
      };
    }, {});
}

module.exports = convertToObject;
