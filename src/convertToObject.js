'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 *  properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertString = sourceString.split(';');
  const delSpaceAndEmpty = convertString
    .map(el => el.trim()).filter(el => el !== '');
  const arrKeyValue = delSpaceAndEmpty
    .map(el => el.split(':').map(x => x.trim()));

  return Object.fromEntries(arrKeyValue);
}

module.exports = convertToObject;
