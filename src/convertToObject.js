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
  const sortedMess = sourceString
    .split(';')
    .map(a => a.split(':')
      .map(b => b.trim()))
    .filter(element => element[0] !== '' && element[1] !== '');

  return sortedMess.reduce((prev, list) => ({
    ...prev,
    [list[0]]: list[1],
  }), {});
}

module.exports = convertToObject;
