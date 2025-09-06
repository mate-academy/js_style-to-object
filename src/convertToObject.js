'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  const stylesObject = String(sourceString)
    .split(';') // split declarations
    .map((s) => s.trim())
    .filter(Boolean)
    .map((decl) => {
      const [rawProp, ...rest] = decl.split(':'); // allow ':' inside values

      if (!rawProp || rest.length === 0) {
        return null;
      }

      const prop = rawProp.trim();
      const value = rest.join(':').trim(); // keep internal spaces/newlines

      return prop ? [prop, value] : null;
    })
    .filter(Boolean)
    .reduce((acc, [prop, value]) => {
      acc[prop] = value; // overwrite duplicates as in CSS

      return acc;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
