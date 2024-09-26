'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = {};

  sourceString
    .split('\n')
    .filter(keyValStr => keyValStr.trim().length > 2)
    .forEach(keyValStr => {
      const keyVal = keyValStr.split(':');

      cssStyles[keyVal[0].trim()] = keyVal[1].slice(0, -1).trim();
    });

  return cssStyles;
}

module.exports = convertToObject;
