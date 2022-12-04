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
  const minPropertyLength = 5;
  const splittedStyle = sourceString.split('\n');
  const formatedStyle = {};

  splittedStyle
    .filter(property => property.length > minPropertyLength)
    .map(property => {
      const splitted = property.trim().split(':');

      return splitted.map(key => {
        return key.replace(';', '').trim();
      });
    })
    .forEach(property => {
      formatedStyle[property[0]] = property[1];
    });

  return formatedStyle;
}

module.exports = convertToObject;
