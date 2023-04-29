'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyle = sourceString
    .split(';')
    .reduce((prev, el) => {
      const [ key, value ] = el.split(':');

      if (key && value) {
        prev[key.trim()] = value.trim();
      }

      return prev;
    }, {});

  return cssStyle;
}

module.exports = convertToObject;
