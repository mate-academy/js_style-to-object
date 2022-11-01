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
  return sourceString
    .split(';')
    .map(str => str.trimEnd())
    .filter(str => str.length !== 0)
    .map(str => str.split(':')
      .map(word => word.trim()))
    .reduce(callback, {});
}

const callback = (accumulator, currentItem) => {
  return {
    ...accumulator, [currentItem[0]]: currentItem[1],
  };
};

module.exports = convertToObject;
