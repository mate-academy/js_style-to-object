'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .filter((style) => style.trim().length > 0);
  const styleObject = {};

  styles.forEach((style) => {
    const [key, value] = style.split(':').map((part) => part.trim());

    if (key && value) {
      styleObject[key] = value;
    }
  });

  return styleObject;
}
module.exports = convertToObject;
