'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const styles = sourceString.split(';');

  styles.forEach((style) => {
    const [property, value] = style.split(':').map((part) => part.trim());

    if (property && value) {
      styleObject[property] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
