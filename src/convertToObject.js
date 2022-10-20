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
  const values = sourceString.split(';').map(el => el.replace('\n', '').trim());
  const objectOfCssValues = {};

  values.forEach(elem => {
    if (elem !== '') {
      const item = elem.split(':').map(ell => ell.trim());

      objectOfCssValues[item[0]] = item[1];
    }
  });

  return objectOfCssValues;
}

module.exports = convertToObject;
