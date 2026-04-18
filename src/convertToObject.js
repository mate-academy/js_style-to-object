'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const declarations = sourceString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);

  declarations.forEach((decl) => {
    const [rawKey, ...rest] = decl.split(':');

    if (!rawKey || rest.length === 0) {
      return;
    }

    const key = rawKey.trim();
    const value = rest.join(':').trim();

    if (!key || !value) {
      return;
    }
    stylesObject[key] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
