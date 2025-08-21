'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarationsArr = sourceString
    .split(';')
    .map(declarationSla => declarationSla.trim())
    .filter(declarationSla => declarationSla.length > 0);

  const suporteObject = {};

  declarationsArr.forEach(declarationSla => {
    const [key, value] = declarationSla.split(':');
    if (key && value) {
      suporteObject[key.trim()] = value.trim();
    }
  });

  return suporteObject;
}

module.exports = convertToObject;