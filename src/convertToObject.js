'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styles = sourceString.split(';');
  const styleObject = {};

  styles.forEach((style) => {
    if (style.trim().length > 0) {
      const styleArray = style.split(':');

      styleObject[styleArray[0].trim()] = styleArray[1].trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
