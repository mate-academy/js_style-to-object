'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (sourceString) {
    let x = '';

    for (let i = 0; i < sourceString.length - 1; i++) {
      if (sourceString[i] === '\n') {
        continue;
      }

      if (sourceString[i] === ' '
        && ((sourceString[i + 1] === ' ')
        || (sourceString[i + 1] === ':')
        || (sourceString[i + 1] === ';'))) {
        continue;
      }

      x += sourceString[i];
    }
    x += sourceString[sourceString.length - 1];

    const newString = x.split(';');
    const styleArray = [];

    for (let i = 0; i < newString.length; i++) {
      if (newString[i].length <= 2) {
        continue;
      }
      styleArray.push(newString[i].split(':'));
    }

    for (let i = 0; i < styleArray.length; i++) {
      let key = styleArray[i][0];
      let value = styleArray[i][1];

      if (key[0] === ' ') {
        key = key.slice(1);
      }

      if (value[0] === ' ') {
        value = value.slice(1);
      }

      result[key] = value;
    }

    return result;
  }

  return {};
}

module.exports = convertToObject;
