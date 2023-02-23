'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see
 * an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrOfString = sourceString.split(';')
    .map(item => item.split(':'));

  const objesctOfSelectors = {};

  arrOfString.forEach(elem => {
    if (elem.length === 2) {
      objesctOfSelectors[elem[0].trim()] = elem[1].trim();
    }
  });

  return objesctOfSelectors;
}

module.exports = convertToObject;
