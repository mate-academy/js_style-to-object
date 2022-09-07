'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitStringArray = sourceString.split(';');

  const deleteNewLine = splitStringArray.map(el => el.replace(/\n/g, ''));

  const arrTrim = deleteNewLine
    .map(el => (el.trim()))
    .filter(el => el !== '')
    .map(el => el.split(':').map(subEl => subEl.trim()))
    .reduce(function(prev, element) {
      prev[element[0]] = element[1];

      return prev;
    }, {});

  return arrTrim;
}

module.exports = convertToObject;
