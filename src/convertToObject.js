'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const styles = sourceString.split(';').filter((style) => style.length !== 0);

  styles.forEach((style) => {
    const [key, value] = style.split(':').map((str) => str.trim());

    if (key && value) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
