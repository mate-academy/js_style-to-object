'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectCreating = (preCreated, property) => (
    {
      ...preCreated,
      [property[0].trim()]: property[1].trim(),
    }
  );

  const cssRules = sourceString
    .split(';')
    .map(rule => rule.trim().split(':'))
    .filter(element => element.length > 1)
    .reduce(objectCreating, {});

  return cssRules;
}

module.exports = convertToObject;
