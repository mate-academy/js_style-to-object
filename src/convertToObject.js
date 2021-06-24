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
  const styles = sourceString.split(';');
  const convertedStyle = {};

  styles.forEach(style => {
    const styleParts = style.split(':');

    if (styleParts[1] === undefined) {
      return;
    }

    convertedStyle[styleParts[0].trim()] = styleParts[1].trim();
  });

  return convertedStyle;
}

module.exports = convertToObject;
