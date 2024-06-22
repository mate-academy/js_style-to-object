'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const parts = sourceString.split(';');
  const cssProperties = {};

  parts
    .map((part) => part.trim().split(':'))
    .filter((piece) => piece.length === 2)
    .forEach(([key, value]) => {
      cssProperties[key.trim()] = value.trim();
    });

  return cssProperties;
}

module.exports = convertToObject;
