'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString || typeof sourceString !== 'string') {
    return {};
  }

  return sourceString
    .split(';')
    .map(decl => decl.trim())
    .filter(Boolean)
    .map(decl => {
      const firstColon = decl.indexOf(':');
      if (firstColon === -1) return null;

      const property = decl.slice(0, firstColon).trim();
      const value = decl.slice(firstColon + 1).trim();

      return property ? { property, value } : null;
    })
    .filter(Boolean)
    .reduce((stylesObject, { property, value }) => {
      stylesObject[property] = value;
      return stylesObject;
    }, {});
}

module.exports = convertToObject;
