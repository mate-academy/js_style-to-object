'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styles = sourceString.split(';').filter((style) => style.length !== 0);
  const result = {};

  styles.forEach((style) => {
    const [key, value] = style.split(':');

    if (key && value) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
