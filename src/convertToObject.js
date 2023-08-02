'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let styles = sourceString.replace(/\n*/g, '').split(';');

  for (let i = 0; i < styles.length; i++) {
    styles[i] = styles[i].trim();

    if (styles[i].length === 0) {
      styles.splice(i, 1);
      i--;
    }
  }
  styles = styles.map(style => style.split(':'));

  const result = {};

  for (const style of styles) {
    result[style[0].trim()] = style[1].trim();
  }

  return result;
}

module.exports = convertToObject;
