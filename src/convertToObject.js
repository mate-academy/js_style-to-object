'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * and returns an object where CSS properties are keys
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  function editStyles(prev, style) {
    const separatorIndex = style.indexOf(':');

    return {
      ...prev,
      [style.slice(0, separatorIndex).trim()]: style.slice(separatorIndex + 1)
        .trim(),
    };
  }

  return sourceString
    .split(';')
    .filter(arr => arr.trim() !== '')
    .reduce(editStyles, {});
}

module.exports = convertToObject;
