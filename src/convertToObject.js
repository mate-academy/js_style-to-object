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
  let str = '';

  for (let i = 0; i < sourceString.length; i++) {
    if (sourceString[i] !== '\n') {
      str += sourceString[i];
    }
  }

  const splittedArr = str.split(';');
  const tempArr = [];

  for (const ch of splittedArr) {
    const splittedElem = ch.split(':');

    if (splittedElem.length > 1) {
      tempArr.push(splittedElem);
    }
  }

  const getProp = (prev, elem) => ({

    ...prev,
    [elem[0].trim()]: elem[1].trim(),
  });

  return tempArr.reduce(getProp, {});
}

module.exports = convertToObject;
