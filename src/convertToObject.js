'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js]
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
  const arrDoubleDot = sourceString.split(';');
  const obj = {};

  for (let i = 0; i < arrDoubleDot.length; i++) {
    const trimmed = arrDoubleDot[i].trim();
    let splitted;

    if (trimmed !== '') {
      splitted = trimmed.split(':');
    } else {
      continue;
    }

    const value = splitted[0].trim();
    const key = splitted[1].trim();

    obj[value] = key;
  }

  return (obj);
}

module.exports = convertToObject;
