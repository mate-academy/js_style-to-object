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
  const stringToCSS = sourceString
    .split(';')
    .map(elem => elem.trim())
    .filter(elem => elem !== '')
    .map(elem => elem.split(':').map(property => property.trim()))
    .reduce((prev, elem) => {
      return {
        ...prev, [elem[0]]: elem[1],
      };
    }, {});

  return stringToCSS;
}

module.exports = convertToObject;
