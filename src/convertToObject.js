'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.length > 0)
    .map((declaration) => declaration.split(':'))
    .filter((parts) => parts.length === 2)
    .reduce(
      (stylesMap, [property, value]) => ({
        ...stylesMap,
        [property.trim()]: value.trim(),
      }),
      {},
    );
}

module.exports = convertToObject;
