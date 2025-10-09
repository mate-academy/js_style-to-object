'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string') {
    return {};
  }

  const stylesObject = sourceString
    .split(';')
    .map((decl) => decl.trim())
    .filter((decl) => decl)
    .reduce((acc, decl) => {
      const [key, ...rest] = decl.split(':');

      if (!key || rest.length === 0) {
        return acc;
      }
      acc[key.trim()] = rest.join(':').trim();

      return acc;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
