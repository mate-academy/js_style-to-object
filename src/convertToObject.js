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
  const objectOfStyles = {};
  const arrayOfStyles = splitAndTrim(sourceString, ';')
    .filter(style => style);

  arrayOfStyles.forEach(style => {
    const [key, value] = style.split(':');

    objectOfStyles[key.trim()] = value.trim();
  });

  return objectOfStyles;
}

function splitAndTrim(arr, char) {
  return arr.split(char).map(str => str.trim());
}

module.exports = convertToObject;
