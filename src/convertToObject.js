'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfStyles = sourceString.split(';');

  arrayOfStyles.pop();

  if (arrayOfStyles.length === 0) {
    return;
  }

  const objectOfStyles = {};

  for (const style of arrayOfStyles) {
    const [key, value] = style.split(':');

    if (key !== undefined && value !== undefined) {
      objectOfStyles[key.trim()] = value.trim();
    }
  }

  return objectOfStyles;
}

module.exports = convertToObject;
