'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with
 * styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .reduce((startValue, stylesString) => {
      const [prop, value] = stylesString.split(':');

      if (prop && value) {
        startValue[prop.trim()] = value
          .trim();
      }

      return startValue;
    }, {});
}

module.exports = convertToObject;
