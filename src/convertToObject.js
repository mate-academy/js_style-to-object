'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleEntries = sourceString
    .split(';')
    .filter((declaration) => declaration.trim() !== '')
    .map((declaration) => {
      const [property, ...valueParts] = declaration.split(':');

      const value = valueParts.join(':');

      return [property.trim(), value.trim()];
    });

  return Object.fromEntries(styleEntries);
}

module.exports = convertToObject;
