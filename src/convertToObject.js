'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString
    .split(';')
    .filter((declaration) => declaration.trim())
    .map((declaration) => declaration.split(':'))
    .reduce((obj, [key, value]) => {
      obj[key.trim()] = value.trim();

      return obj;
    }, {});

  return declarations;
}
module.exports = convertToObject;
