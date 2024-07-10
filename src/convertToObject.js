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
    .filter((style) => style !== '')
    .map((style) => style.split(':'))
    .reduce((styles, [key, value]) => Object.assign(styles, { [key.trim()]: value.trim() }), {});
}

module.exports = convertToObject;
