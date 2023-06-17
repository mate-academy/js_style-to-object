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
  return sourceString
    .match(/\n+(.*?);/g)
    .filter(string => /[a-z]/g.test(string))
    .map(string => string
      .slice(1, -1)
      .split(':')
      .map(str => str.trim()))
    .reduce((acc, curr) => {
      return {
        ...acc, [curr[0]]: curr[1],
      };
    }, {});
}

module.exports = convertToObject;
