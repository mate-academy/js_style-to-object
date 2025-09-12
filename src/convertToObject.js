'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean)
    .reduce((acc, decl) => {
      const colon = decl.indexOf(':');

      if (colon === -1) {
        return acc;
      }

      const prop = decl.slice(0, colon).trim();
      const value = decl.slice(colon + 1).trim();

      if (prop) {
        acc[prop] = value;
      }

      return acc;
    }, {});

  return styles;
}

module.exports = convertToObject;
