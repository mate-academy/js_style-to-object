'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const styles = sourceString.split(';');

  styles.forEach((style) => {
    const [key, value] = style.split(':').map((values) => values.trim());

    if (key && value) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
