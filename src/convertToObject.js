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
  const properiesObject = {};
  const elements = sourceString
    .split(';')
    .map(element => element.trim())
    .filter(element => element !== '');

  elements.forEach(style => {
    const [key, value] = style.split(':').map(part => part.trim());

    properiesObject[key] = value;
  });

  return properiesObject;
}

module.exports = convertToObject;
