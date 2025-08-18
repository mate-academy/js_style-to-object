'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssDeclarations = sourceString
    .split(';')
    .filter((pair) => pair.trim() !== '');

  function objCreator(objectAccumulator, cssDeclaration = '') {
    if (!cssDeclaration.includes(':')) {
      return objectAccumulator;
    } else {
      const objKey = cssDeclaration.split(':')[0].trim();
      const objValue = cssDeclaration.split(':')[1].trim();

      return {
        ...objectAccumulator,
        [objKey]: objValue,
      };
    }
  }

  return cssDeclarations.reduce(objCreator, {});
}

module.exports = convertToObject;
