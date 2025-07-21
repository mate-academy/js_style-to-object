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
    .filter((style) => style.includes(':'))
    .map((style) => {
      const index = style.indexOf(':');
      const key = style.slice(0, index).trim();
      const value = style.slice(index + 1).trim();

      return [key, value];
    })
    .reduce((obj, [key, value]) => {
      obj[key.trim()] = value.trim();

      return obj;
    }, {});
}

module.exports = convertToObject;
