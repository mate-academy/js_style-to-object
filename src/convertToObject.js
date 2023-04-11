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
  const styles = sourceString
    .split(';')
    .filter((style) => style.trim() !== '');

  const convertedString = {};

  for (const style of styles) {
    const [key, value] = style
      .split(':')
      .map((item) => item.trim());

    convertedString[key] = value;
  }

  return convertedString;
}

module.exports = convertToObject;
