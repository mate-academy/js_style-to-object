'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedString = sourceString
    .split(';').map((element) => element.trim())
    .filter((element) => element !== '' && element !== ';')
    .map((element) => element.split(':'))
    .map((element) => [element[0].trim(), element[1].trim()]);
  const styles = {};

  splittedString.forEach((element) => {
    const key = element[0];
    const value = element[1];

    styles[key] = value;
  });

  return styles;
}

module.exports = convertToObject;
