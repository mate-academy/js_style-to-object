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
  const cssStyles = {};
  const styles = sourceString.split(';').filter(style => style.trim());

  styles.filter(style => {
    const keysValues = style.split(':');

    if (keysValues.length > 1) {
      cssStyles[keysValues[0].trim()] = keysValues[1].trim();
    }
  });

  return cssStyles;
}

module.exports = convertToObject;
