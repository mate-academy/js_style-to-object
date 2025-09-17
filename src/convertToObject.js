'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString
    .split(';')
    .map((str) => str.trim())
    .filter((str) => str.length !== 0 && str.includes(':'))
    .map((item) => item.split(':').map((str) => str.trim()));

  const stylesMap = {};

  declarations.forEach(([key, value]) => {
    if (key && value) {
      stylesMap[key] = value;
    }
  });

  return stylesMap;
}

module.exports = convertToObject;
