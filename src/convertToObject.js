'use strict';

const stylesString = require('./stylesString');

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file]
 * (./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split('\n');

  const stylesObj = stylesArray.reduce((acc, line) => {
    const [key, value] = line.split(':');

    if (key && value) {
      const formattedKey = key.trim();
      const formattedValue = value.trim();

      acc[formattedKey] = formattedValue.replace(/;/, '').trim();
    }

    return acc;
  }, {});

  return stylesObj;
}

convertToObject(stylesString);

module.exports = convertToObject;
