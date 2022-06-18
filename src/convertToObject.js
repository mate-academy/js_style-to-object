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
function convertToObject(sourceString) {
  const callback = (previous, current) => ({
    ...previous,
    [current[0].trim()]: current[1].trim(),
  });

  const propertiesObject = sourceString
    .split(';')
    .map(element => element.split(':'))
    .filter(element => element.length > 1)
    .reduce(callback, {});

  return propertiesObject;
}

module.exports = convertToObject;
