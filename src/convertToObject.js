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
  const filteredArray = sourceString.split(';').filter(style =>
    style.trim() !== '');

  const convertedObject = {};

  filteredArray.forEach(style => {
    const [property, value] = style.split(':').map(item => item.trim());

    convertedObject[property] = value;
  });

  return convertedObject;
}

module.exports = convertToObject;
