'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((declaration) => declaration.trim())
    .map((declaration) => declaration.split(':').map((part) => part.trim()))
    .reduce(
      (styles, [property, value]) => ({ ...styles, [property]: value }),
      {},
    );
}

module.exports = convertToObject;
