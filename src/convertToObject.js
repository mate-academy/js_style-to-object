'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stringStyles) {
  const styleDeclarations = stringStyles.split(';').filter(Boolean);
  const keyValuePairs = styleDeclarations
    .map((declaration) => {
      const [key, value] = declaration.trim().split(':');

      if (!key || !value) {
        return null;
      }

      return [key.trim(), value.trim()];
    })
    .filter(Boolean);

  const newObj = Object.fromEntries(keyValuePairs);

  return newObj;
}

module.exports = convertToObject;
