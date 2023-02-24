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
function convertToObject(stylesString) {
  const createStyleList = stylesString
    .split(';')
    .filter(value => value.trim())
    .map(obj => {
      const [key, value] = obj
        .split(':')
        .map(str => str.trim());
      const styleObject = {};

      styleObject[key] = value;

      return styleObject;
    });

  return Object.assign({}, ...createStyleList);
}

module.exports = convertToObject;
