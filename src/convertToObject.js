'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const firstSplit = sourceString.split(';');
  let objectCSS = {};

  firstSplit.forEach(element => {
    const arrayElem = element.split(':');
    const key = arrayElem[0];
    const value = arrayElem[1];

    if (key.trim().length !== 0) {
      objectCSS = {
        ...objectCSS,
        [key.trim()]: value.trim(),
      };
    }
  });

  return objectCSS;
}

module.exports = convertToObject;
