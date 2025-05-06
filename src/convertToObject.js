'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';').filter(Boolean);
  const result = {};

  styles.forEach((style) => {
    const [property, value] = style.split(':').map((part) => part.trim());

    if (property && value) {
      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
