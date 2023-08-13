'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map(string => string.trim().split(':'))
    .filter(el => el.length > 1)
    .reduce((acc, element, i) => {
      return {
        ...acc, [element[0].trim()]: element[1].trim(),
      };
    }, {});

  return styles;
}

module.exports = convertToObject;
