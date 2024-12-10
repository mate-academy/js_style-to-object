'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  sourceString
    .split(';')
    .map((declaration) => declaration.split(':'))
    .filter(([property, value]) => property && value)
    .forEach(([property, value]) => {
      styleObject[property.trim()] = value.trim();
    });

  return styleObject;
}

module.exports = convertToObject;
