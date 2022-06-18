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
  const objectOfStyles = {};
  const arrStyles = sourceString.split(';');

  const resultTrim = trimmer(arrStyles);

  for (let i = 0; i < resultTrim.length; i++) {
    if (resultTrim[i].length !== 0 && resultTrim[i][0].length !== 0) {
      const style = resultTrim[i][0];
      const value = resultTrim[i][1];

      objectOfStyles[style.trim()] = value.trim();
    }
  }

  return objectOfStyles;
}

function trimmer(arr) {
  return arr.map(el => el.trim().split(':'));
}

module.exports = convertToObject;
