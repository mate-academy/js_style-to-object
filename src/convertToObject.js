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
    .reduce((newArr, style) => {
      if (style.trim() === '') {
        return newArr;
      }

      newArr.push(style.trim());

      return newArr;
    }, []);

  const objectOfStyles = arrayOfStyles.reduce((obj, style) => {
    const [key, value] = style.split(':');

    return {
      ...obj,
      [key.trim()]: value.trim(),
    };
  }, {});

  return objectOfStyles;
}

module.exports = convertToObject;
