'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');

  return arr.reduce((acc, el) => {
    const splitArr = el.split(':');

    if (splitArr.length !== 2) {
      return acc;
    }

    return {
      ...acc,
      [splitArr[0].trim()]: splitArr[1].trim(),
    };
  }, {});
}

module.exports = convertToObject;
