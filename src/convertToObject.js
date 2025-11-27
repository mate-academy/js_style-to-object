'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styles = sourceString.split(';').filter((item) => item.trim() !== '');

  const result = {};

  styles.forEach((style) => {
    const [key, value] = style.split(':').map((item) => item.trim());

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
