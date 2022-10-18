'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const tidiedArray = sourceString.split(';')
    .map(pair => pair.split(':').map(elem => elem.trim())
      .filter(arr => arr.length !== 0)).filter(arr => arr.length !== 0);

  return Object.fromEntries(tidiedArray);
}

module.exports = convertToObject;
