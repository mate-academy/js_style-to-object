'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *  in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};

  const array = sourceString.split(';');

  const resItem = array.map(el => el.split(':').map(gap => gap.trim()))
    .filter(lengths => lengths.length > 1);

  for (const item of resItem) {
    const [ key, value ] = item;

    cssObject[key] = value;
  }

  return cssObject;
}

module.exports = convertToObject;
