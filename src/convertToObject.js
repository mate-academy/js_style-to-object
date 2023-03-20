'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceStringArray = sourceString
    .split(';')
    .map(styleString => styleString.trim().split(':'))
    .filter(a => a.length > 1);

  const sourceStringObject = sourceStringArray
    .reduce((resultObject, arrayElement) => ({
      ...resultObject,
      [arrayElement[0].trim()]: arrayElement[1].trim(),
    }), {});

  return sourceStringObject;
}

module.exports = convertToObject;
