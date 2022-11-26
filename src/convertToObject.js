'use strict';

/*
 * Implement convertToObject function:
 *
 * and returns an object where CSS properties are keys
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesContainer = {};

  sourceString
    .split('\n')
    .map((property) => property.trim())
    .filter(property => property.length !== 1 && property)
    .map(property => {
      stylesContainer[property.slice(0, property.indexOf(':')).trim()]
        = property.slice(property.indexOf(':') + 1, -1).trim();
    });

  return stylesContainer;
}

module.exports = convertToObject;
