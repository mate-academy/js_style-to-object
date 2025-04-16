'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styles = {};

  sourceString.split(';').forEach((part) => {
    const [key, value] = part.split(':');

    if (key && value) {
      styles[key.trim()] = value.trim();
    }
  });

  return styles;
}

module.exports = convertToObject;
