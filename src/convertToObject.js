'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean)
    .reduce((acc, decl) => {
      const [prop, value] = decl.split(':');

      if (prop && value) {
        acc[prop.trim()] = value.trim();
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
