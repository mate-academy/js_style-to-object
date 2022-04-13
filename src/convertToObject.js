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
  const array = {};
  let parts = '';
  let key = [];
  let values = [];

  const expressions = sourceString.split(';')
    .map(str => str.trim())
    .filter(trimmed => trimmed.length > 0);

  expressions.forEach(exp => {
    parts = exp.split(':');
    key = parts[0].trim();
    values = parts[1].trim();

    array[key] = values;
  });

  return array;
}

module.exports = convertToObject;
