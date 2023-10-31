'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 *  [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let newString = '';

  for (let i = 0; i < sourceString.length; i++) {
    if (((sourceString[i] === '\n')
      || ((sourceString[i] === ' ') && (sourceString[i + 1] === ' '))
      || ((sourceString[i] === ' ') && (sourceString[i - 1] === ' '))
      || ((sourceString[i] === ' ') && (sourceString[i - 1] === ':'))
      || ((sourceString[i] === ' ') && (sourceString[i - 1] === ';')))) {
      continue;
    } else {
      newString += sourceString[i];
    }
  }

  const result = newString.split(/;|:/)
    .filter((element) => element.length > 0);
  const newObj = {};

  for (let i = 0; i < result.length; i += 2) {
    newObj[result[i]] = result[(i + 1)];
  }

  return newObj;
}

module.exports = convertToObject;
