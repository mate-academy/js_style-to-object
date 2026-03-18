'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean)
    .reduce((acc, decl) => {
      const [prop, ...rest] = decl.split(':');

      if (!prop || rest.length === 0) {
        return acc;
      }

      const key = prop.trim();
      const value = rest.join(':').trim();

      if (key && value) {
        acc[key] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
