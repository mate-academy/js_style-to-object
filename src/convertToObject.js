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
  const array = sourceString.split(';').map(el => el.trim());
  const removeScapces = array.map(el => el.split(' ').join(''));
  const addSpace = removeScapces.map(el => el.split(':').join(': '));
  const withoutEmptyStrings = addSpace.filter(el => el.length > 0);

  const object = {};

  withoutEmptyStrings.forEach(element => {
    const [key, value] = element.split(':');

    object[key] = value;
  });

  return object;
}

module.exports = convertToObject;
