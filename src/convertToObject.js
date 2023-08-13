'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const transformedToSortedString = sourceString.split(';')
    .map(str => str.trim())
    .join('; ')
    .split(': ')
    .map(str => str.trim())
    .join(': ')
    .split(';')
    .filter(element => element !== ' ' && element !== '')
    .map(element => element.trim())
    .sort((element1, element2) => {
      return element1.localeCompare(element2);
    });

  const cssObject = {};

  transformedToSortedString.forEach(element => {
    const [key, value] = element.split(':').map(part => part.trim());

    cssObject[key] = value;
  });

  return cssObject;
}
module.exports = convertToObject;
