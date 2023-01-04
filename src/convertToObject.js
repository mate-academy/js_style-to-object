'use strict';

/**
 * Implement convertToObject function:
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = sourceString.split(';')
    .filter(el => el.trim().length > 0)
    .map(element => element
      .split(':')
      .map(el => el.trim()));

  return Object.fromEntries(styleObject);
}

module.exports = convertToObject;
