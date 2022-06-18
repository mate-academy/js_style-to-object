'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 *  [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const res = sourceString.split(';');

  const object = {};

  res.map(styles => styles
    .trim()
    .split(':')
    .map(key => key.trim()))
    .filter(str => str.length === 2)
    .map(value => callback(value));

  function callback(value) {
    const style = object[value[0]] = value[1];

    return style;
  }

  return object;
}

module.exports = convertToObject;
