'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS
 * properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';')
    .map(style => (
      style.split(':')
        .map(text => text.trim())
    ))
    .filter(style => style.length > 1)
    .reduce((sumObject, [key, value]) => {
      sumObject[key] = value;

      return sumObject;
    }, {});
}

module.exports = convertToObject;
