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
  return sourceString
    .split(';')
    .map(str => str.trim())
    .filter(str => str.length > 0)
    .map(str => str.split(':')
      .map(word => word.trim()))
    .reduce(createObj, {});
}

const createObj = (prev, current) => {
  return {
    ...prev, [current[0]]: current[1],
  };
};

module.exports = convertToObject;
