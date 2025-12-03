'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = sourceString
    .split(';')
    .map((decl) => decl.trim())
    .filter((decl) => decl.length > 0)
    .map((decl) => {
      const colonIndex = decl.indexOf(':');

      if (colonIndex === -1) {
        return null;
      }

      const prop = decl.slice(0, colonIndex).trim();
      const val = decl.slice(colonIndex + 1).trim();

      if (!prop || !val) {
        return null;
      }

      return [prop, val];
    })
    .filter(Boolean)
    .reduce((cssPropertiesAcc, [prop, val]) => {
      cssPropertiesAcc[prop] = val;

      return cssPropertiesAcc;
    }, {});

  return cssProperties;
}

module.exports = convertToObject;
