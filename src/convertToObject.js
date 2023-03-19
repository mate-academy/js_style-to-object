'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see
 * an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  sourceString
    .split('\n')
    .filter(string => string.length > 5)
    .map((el) => {
      return el.split(':')
        .map(part => part.trim())
        .reduce((key, values) => {
          const obj = {};

          obj[key] = values.slice(0, -1).trim();

          return obj;
        });
    })
    .forEach(obj => Object.assign(styles, obj));

  return styles;
}

module.exports = convertToObject;
