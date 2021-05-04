'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfStyles = sourceString.split(':').join(';').split(';').map(item =>
    item.trim());
  const css = {};

  for (let i = 0; i < arrayOfStyles.length; i++) {
    if (arrayOfStyles[i] !== '') {
      css[arrayOfStyles[i]] = arrayOfStyles[i + 1];
      i++;
    }
  }

  return css;
}

module.exports = convertToObject;
