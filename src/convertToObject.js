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
  const arrStyles = sourceString
    .split(';')
    .map(el => el.trim().split(':').map(x => x.trim()))
    .map(elem => elem.filter(item => item.length !== 0))
    .filter(element => element.length !== 0);

  return Object.fromEntries(arrStyles);
}

module.exports = convertToObject;
