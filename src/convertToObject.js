'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((item) => item.trim().includes(':'))
    .reduce((stylesObject, declaration) => {
      const colonIndex = declaration.indexOf(':');
      const property = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      return {
        ...stylesObject,
        [property]: value,
      };
    }, {});
}

module.exports = convertToObject;
