'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.includes(':'))
    .forEach((declaration) => {
      const [propertyName, propertyValue] = declaration.split(':');
      const key = propertyName.trim();
      const value = propertyValue.trim();

      if (key && value) {
        stylesObject[key] = value;
      }
    });

  return stylesObject;
}

module.exports = convertToObject;
