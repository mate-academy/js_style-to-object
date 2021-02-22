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
  // write your code here\

  const styles = {};
  const arrayOfStyles = sourceString.split(';');

  arrayOfStyles.forEach(style => {
    if (style.includes(':')) {
      const styleUnit = style.split(':');

      styles[styleUnit[0].trim()] = styleUnit[1].trim();
    }
  });

  return styles;
}

module.exports = convertToObject;
