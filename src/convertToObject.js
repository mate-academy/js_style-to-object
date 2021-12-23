'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const correctStyles = {};

  const styles = sourceString
    .split(';').map(style => style.split(':'));

  styles.forEach(style => {
    if (style.length === 2) {
      const key = style[0].trim();
      const value = style[1].trim();

      correctStyles[key] = value;
    }
  });

  return correctStyles;
}

module.exports = convertToObject;
