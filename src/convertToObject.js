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
  const prop = sourceString
    .split(';')
    .filter(el => el.includes(':'))
    .map(el => el.split(':')
      .map(halfEl => halfEl.trim()));

  return prop.reduce((prev, el) => ({
    ...prev,
    [el[0]]: el[1],
  }), {});
}

module.exports = convertToObject;
