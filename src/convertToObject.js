'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styles = sourceString
    .split(';')
    .map((style) => style.split(':'))
    .filter(style => style[1] !== undefined);

  return styles.reduce((prev, style) => {
    return {
      ...prev,
      [style[0].trim()]: style[1].trim(),
    };
  }, 0);
}

module.exports = convertToObject;
