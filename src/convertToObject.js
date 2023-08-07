'use strict';
'eslint-disable no-console';
/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const arrayOfStyles = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style !== '');

  const objectOfStyles = arrayOfStyles.reduce((obj, style) =>
    (
      {
        ...obj, [style.split(':')[0].trim()]: style.split(':')[1].trim(),
      }
    ), {});

  return objectOfStyles;
}

module.exports = convertToObject;
