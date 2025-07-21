'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string') {
    throw new TypeError('Input must be a string');
  }

  return sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style.length)
    .map((style) => style.split(':'))
    .filter((pair) => pair.length === 2)
    .map(([key, value]) => [key.trim(), value.trim()])
    .reduce((styleMap, [key, value]) => {
      styleMap[key] = value;

      return styleMap;
    }, {});
}

module.exports = convertToObject;
