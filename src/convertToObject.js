'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .filter(Boolean)
    .forEach((element) => {
      const eachDeclaration = element.split(':');

      if (eachDeclaration[0] && eachDeclaration[1]) {
        result[eachDeclaration[0].trim()] = eachDeclaration[1].trim();
      }
    });

  return result;
}

module.exports = convertToObject;
