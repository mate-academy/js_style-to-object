'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const arrParts = sourceString.split(';');
  const finalArr = arrParts.map((el) => {
    return el
      .split('')
      .filter((item) => item !== '\n')
      .join('');
  });

  for (const part of finalArr) {
    const pair = part.split(':');
    const [style, key] = pair;

    if (!result[style] && key !== undefined) {
      result[style.trim()] = key.trim();
    }
  }

  return result;
}
module.exports = convertToObject;
