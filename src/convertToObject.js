'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((decl) => decl.trim())
    .filter(Boolean)
    .reduce((acc, decl) => {
      const [key, ...rest] = decl.split(':');

      if (!key || rest.length === 0) {
        return acc;
      }

      const value = rest.join(':').trim();

      acc[key.trim()] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
