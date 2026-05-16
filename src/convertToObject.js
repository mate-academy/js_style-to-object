'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssDeclarations = sourceString
    .split(`;`)
    .map((x) => x.trim())
    .filter((x) => x.length > 0)
    .map((x) => x.split(`:`))
    .reduce((acc, x) => {
      acc[x[0].trim()] = x[1].trim();

      return acc;
    }, {});

  return cssDeclarations;
}
module.exports = convertToObject;
