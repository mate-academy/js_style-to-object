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
  const objectOfStyles = {};
  const arrOfStyles = sourceString.split(';');

  for (const style of arrOfStyles) {
    const [keyOfObject, ...value] = style.trim().split(':')
      .map(item => item.trim().split(' ').filter(v => v).join(' '));

    if (keyOfObject && value) {
      objectOfStyles[keyOfObject] = value.join(' ');
    }
  }

  return objectOfStyles;
}

module.exports = convertToObject;
