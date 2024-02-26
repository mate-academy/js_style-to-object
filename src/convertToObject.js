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
  // write your code here
  const splittedSource = sourceString.split(';').map((part) => part.trim())
    .filter((item) => item.trim() !== '');

  const convertedStyles = splittedSource.reduce((acc, item) => {
    const [property, value] = item.split(':');

    acc[property.trim()] = value.trim();

    return acc;
  }, {});

  return convertedStyles;
}

module.exports = convertToObject;
