'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = sourceString
    .split(';')
    .filter((declaration) => declaration.trim())
    .map((declaration) => declaration.split(':'))
    .reduce((accumulator, [key, value]) => {
      accumulator[key.trim()] = value.trim();

      return accumulator;
    }, {});

  return cssStyles;
}

module.exports = convertToObject;
