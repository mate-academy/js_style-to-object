'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an
 * example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file]
 * (./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const makeRawArray = sourceString.replace(/(\n|\r)/gm, '')
    .split(';');
  const cssObject = {};

  makeRawArray.map((item) => {
    const itemArr = item.split(':').map(elem => elem.trim());

    if (itemArr[0] !== '') {
      cssObject[itemArr[0]] = itemArr[1];
    }
  });

  return cssObject;
}

module.exports = convertToObject;
