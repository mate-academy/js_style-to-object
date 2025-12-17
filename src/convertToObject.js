'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((styleDeclaration) => styleDeclaration.trim())
    .filter((styleDeclaration) => styleDeclaration.length)
    .map((styleDeclaration) => {
      const [property, value] = styleDeclaration
        .split(':')
        .map((part) => part.trim());

      return [property, value];
    })
    .filter(([property, value]) => property && value)
    .reduce((stylesMap, [property, value]) => {
      return {
        ...stylesMap,
        [property]: value,
      };
    }, {});
}

module.exports = convertToObject;
