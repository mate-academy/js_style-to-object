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
    .map((decl) => {
      const i = decl.indexOf(':');

      if (i === -1) {
        return null;
      }

      const prop = decl.slice(0, i).trim();

      const rawVal = decl.slice(i + 1);
      const value = rawVal.replace(/^\s+/, '').replace(/\s+$/, '');

      if (!prop || !value) {
        return null;
      } else {
        return [prop, value];
      }
    })
    .filter(Boolean)
    .reduce((stylesObject, [prop, value]) => {
      stylesObject[prop] = value;

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
