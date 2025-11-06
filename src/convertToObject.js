'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const cssPairs = sourceString
    .split(';')
    .map((element) => element.trim())
    .filter((element) => element.length > 0)
    .map((element) => element.split(':').map((part) => part.trim()));

  const styles = Object.fromEntries(cssPairs);

  return styles;
}

module.exports = convertToObject;
