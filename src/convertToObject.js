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
    const cleanStyle = style.trim();

    if (cleanStyle) {
      const parts = cleanStyle.split(':');

      const property = parts[0].trim();
      const value = parts[1].trim();

      styleObject[property] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
