'use strict';
/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const cssObject = {};

  sourceString
    .split(';')
    .filter((property) => {
      return property.trim().length !== 0;
    })
    .map((prop) => {
      const property = prop.split(':');
      const key = property[0].trim();
      const value = property[1].trim();

      cssObject[key] = value;
    });

  return cssObject;
}

module.exports = convertToObject;
