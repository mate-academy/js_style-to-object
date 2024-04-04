'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  const stylesObject = sourceString
    .split(';')
    .map((style) => style.trim().split(':'))
    .filter((pair) => pair[0] !== '')
    .reduce((acc, [key, value]) => {
      acc[key.trim()] = value.trim();

      return acc;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
