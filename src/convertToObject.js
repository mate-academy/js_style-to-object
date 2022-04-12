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
  const string = sourceString.split(';');
  const values = [];
  const keys = [];
  const styles = {};

  string.forEach(item => {
    const property = item.split(':');

    values.push(property[0].trim());
    keys.push(property[1]);
  });

  for (let i = 0; i < values.length; i++) {
    if (values[i] !== '') {
      styles[values[i]] = keys[i].trim();
    }
  }

  return styles;
}

module.exports = convertToObject;
