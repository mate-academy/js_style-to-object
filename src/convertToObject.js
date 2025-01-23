'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style && style.includes(':'))
    .reduce((styleObject, declaration) => {
      const [key, value] = declaration.split(':').map((part) => part.trim());

      return { ...styleObject, [key]: value };
    }, {});
}

module.exports = convertToObject;
