'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');
  const styleEntries = styleDeclarations
    .map((el) => el.split(':'))
    .filter(([el1, el2]) => el1.length !== 0 && el2 !== undefined)
    .map(([el1, el2]) => [el1.trim(), el2.trim()]);

  return Object.fromEntries(styleEntries);
}

module.exports = convertToObject;
