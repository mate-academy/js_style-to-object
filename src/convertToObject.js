'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const finalStyles = {};
  const styles = sourceString.split(';');

  styles.forEach((style) => {
    const [key, value] = style.split(':').map((part) => part.trim());

    if (key && value) {
      finalStyles[key] = value;
    }
  });

  return finalStyles;
}

module.exports = convertToObject;
