'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return Object.fromEntries(
    sourceString
      .split(';')
      .map((decl) => decl.trim())
      .filter((decl) => decl)
      .map((decl) => {
        const [property, ...rest] = decl.split(':');
        const value = rest.join(':').trim();

        return [property.trim(), value];
      }),
  );
}

module.exports = convertToObject;
