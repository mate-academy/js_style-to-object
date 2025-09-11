'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const stylesObject = sourceString
    .split(';')
    .filter((declaration) => declaration.includes(':'))
    .reduce((acc, declaration) => {
      const [property, value] = declaration.split(':');

      acc[property.trim()] = value.trim();

      return acc;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
