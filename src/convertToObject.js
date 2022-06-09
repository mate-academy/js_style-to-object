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
  const cssObj = {};

  const arr = sourceString.split(';');

  const res = arr.map(el => el.split(':').map(e => e.trim()))
    .filter(l => l.length > 1);

  for (const item of res) {
    const [ key, value ] = item;

    cssObj[key] = value;
  }

  return cssObj;
};

module.exports = convertToObject;
