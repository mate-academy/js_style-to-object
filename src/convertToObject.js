'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 *  [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const strArr = sourceString.split(';');

  const obj = strArr.reduce((acc, i) => {
    if (!i) {
      return acc;
    }

    const str = i.replace('\n', '').trim();

    if (!str) {
      return acc;
    }

    const itemArr = str.split(':');

    return {
      ...acc, [itemArr[0].trim()]: itemArr[1].trim(),
    };
  }, {});

  return obj;
}

module.exports = convertToObject;
