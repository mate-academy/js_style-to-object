'use strict';

/**
 * Implement convertToObject function:
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  const stylePairs = sourceString.split(';').map(pair => pair
    .split(':').map(el => el.trim()));

  stylePairs.forEach(pair => {
    if (pair.length >= 2) {
      styles[pair[0]] = pair[1];
    }
  });

  return styles;
}

module.exports = convertToObject;
