'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const changes = sourceString;

  changes.split(';')
    .filter(elem => elem.trim().length !== 0)
    .map(elem => {
      const css = elem.split(':');
      const key = css[0].trim();
      const value = css[1].trim();

      result[key] = value;
    });

  return result;
}

module.exports = convertToObject;
