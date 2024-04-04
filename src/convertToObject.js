'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString || sourceString === '') {
    return {};
  }

  const STYLES_OBJECT = sourceString
    .split(';')
    .map((style) => style.trim().split(':'))
    .filter((pair) => pair[0] !== '')
    .reduce((acc, [key, value]) => {
      acc[key.trim()] = value.trim();

      return acc;
    }, {});

  return STYLES_OBJECT;
}

module.exports = convertToObject;

// && pair[1] !== undefined
