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
  const result = {};
  let current = [];
  const input = sourceString.split(';');
  const emptyCheck = value => value !== '';

  for (const str of input) {
    current.push(str.trim());
  }

  current = current.filter(emptyCheck);

  for (let cur of current) {
    cur = cur
      .split(':')
      .filter(emptyCheck)
      .map(values => values.trim());

    const [property, value] = cur;

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
