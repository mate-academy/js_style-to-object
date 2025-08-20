'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = sourceString
    .split(';')
    .map((decl) => decl.trim())
    .filter((decl) => decl)
    .reduce((acc, decl) => {
      const [key, value] = decl.split(':');

      if (key && value) {
        acc[key.trim()] = value.trim();
      }

      return acc;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
