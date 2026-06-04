'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const allStyles = {};

  sourceString
    .split(';')
    .filter((style) => style.trim() !== '')
    .map((style) => style.split(':'))
    .forEach(
      (definition) => (allStyles[definition[0].trim()] = definition[1].trim())
    );

  return allStyles;
}

module.exports = convertToObject;
