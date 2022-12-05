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
  return sourceString
    .split(';')
    .map(property => property
      .split(':')
      .map(side => side
        .trim()))
    .filter(element => element[0])
    .reduce((acc, property) => {
      acc[property[0]] = property[1];

      return acc;
    }, {});
}

module.exports = convertToObject;
