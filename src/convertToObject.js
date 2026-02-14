'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rawDeclarations = sourceString.split(';');
  const cssDeclarations = rawDeclarations
    .map((item) => item.trim())
    .filter((item) => item);
  const keyValuePairs = cssDeclarations.map((r) => r.split(':'));
  const cssObject = {};

  keyValuePairs.forEach((pair) => {
    const property = pair[0].trim();
    const value = pair[1].trim();

    cssObject[property] = value;
  });

  return cssObject;
}

module.exports = convertToObject;
