'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter(Boolean);

  const result = {};

  declarations.forEach((declaration) => {
    const parts = declaration.split(':', 2).map((part) => part.trim());

    if (parts.length === 2) {
      const [key, value] = parts;
      let newValue = value;

      if (newValue.includes('!important')) {
        newValue = newValue.replace('!important', '').trim() + ' !important';
      }

      result[key] = newValue;
    }
  });

  return result;
}

module.exports = convertToObject;
