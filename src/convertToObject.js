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
  const newObjectwithClasses = sourceString
    .split(';')
    .map(classes => classes.trim())
    .filter(Boolean)
    .map(classes => classes.split(':'))
    .reduce((acc, current) => ({
      ...acc,
      [current[0].trim()]: current[1].trim(),
    }), {});

  return newObjectwithClasses;
}

module.exports = convertToObject;
