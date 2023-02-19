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
  const styles = {};
  const stylesArr = sourceString.trim().split(';');

  for (const style of stylesArr) {
    const styleCouple = style.trim().split(':');

    if (styleCouple[0]) {
      styles[styleCouple[0].trim()] = styleCouple[1].trim();
    }
  }

  return styles;
}

module.exports = convertToObject;
