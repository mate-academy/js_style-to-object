'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  let styleObject = {};
  const styleArray = sourceString
    .trim()
    .split(';')
    .filter((item) => {
      const colonIndex = item.indexOf(':');
      const keySplice = item.slice(0, colonIndex).trim();
      const valueSplice = item.slice(colonIndex + 1).trim();

      if (keySplice.length === 0 || valueSplice.length === 0) {
        return false;
      }

      return true;
    });

  styleObject = Object.fromEntries(
    styleArray.map((couple) => couple.split(':', 2).map((item) => item.trim())),
  );

  return styleObject;
}

module.exports = convertToObject;
