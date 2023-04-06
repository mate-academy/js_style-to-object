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
  // write your code here
  return sourceString
    .split(';')
    .map(property => {
      return property
        .split(':')
        .map(element => element.trim())
        .filter(element => element !== '');
    })
    .filter(empty => empty.length)
    .sort(([a], [b]) => a.localeCompare(b))
    .reduce((styles, currentProperty) => {
      return ({
        ...styles, [currentProperty[0]]: currentProperty[1],
      });
    }, {});
}

module.exports = convertToObject;
