'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
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
  const result = {};
  const styles = sourceString.split(';').map(str => str.trim().split(':'));
  const stylesFilterd = styles.filter(arr => arr.length > 1);

  for (const style of stylesFilterd) {
    result[style[0].trim()] = style[1].trim();
  }

  return result;
}

module.exports = convertToObject;
