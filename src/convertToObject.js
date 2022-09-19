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
  const stylesRaw = sourceString
    .split(';')
    .map(a => a.split(':').map(b => b.trim()));

  const styles = {};

  for (const style of stylesRaw) {
    if (style.length === 2) {
      styles[style[0]] = style[1];
    }
  }

  return styles;
}

module.exports = convertToObject;
