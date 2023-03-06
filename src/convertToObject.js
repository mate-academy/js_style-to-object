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
  return sourceString
    .split(';')
    .filter(element => element.trim())
    .reduce((acc, item) => {
      const style = item.trim();
      const cuted = style
        .split(':')
        .map(element => element.trim());
      const prop = cuted[0];
      const value = cuted[1];

      return {
        ...acc,
        [prop]: value,
      };
    }, {});
}

module.exports = convertToObject;
