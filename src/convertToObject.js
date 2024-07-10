'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => {
      return style !== '';
    })
    .map((style) => {
      return style.split(':');
    })
    .reduce((styles, [key, value]) => {
      return { ...styles, [key.trim()]: value.trim() };
    }, {});
}

module.exports = convertToObject;
