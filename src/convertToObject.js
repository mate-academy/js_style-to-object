'use strict';

// const stylesString = require('./stylesString');

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let lines = sourceString.split('\n');

  lines = lines.map(line => line.trim());

  lines = lines.filter(line => line.length > 1);

  const styles = {};

  for (const line of lines) {
    const [key, value] = line.split(':').map(part => part.trim());

    styles[key] = value.slice(0, -1).trim();
  }

  return styles;
}

module.exports = convertToObject;
