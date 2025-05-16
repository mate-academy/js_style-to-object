'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let declarations = sourceString.split(';').filter(declaration => declaration.trim() !== '');
  const result = {};

  declarations = declarations.map(function (declaration) {
    const declarationArray = declaration.split(':').map((part) => part.trim());

    return declarationArray;
  });

  declarations.forEach(function (param) {
    if (param.length === 2) {
      result[param[0]] = param[1];
    }
  });

  return result;
}

module.exports = convertToObject;
