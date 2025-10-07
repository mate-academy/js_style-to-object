'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function convertToObject(sourceString) {
  const result = {};
  const declaration = sourceString.split(';');

  declaration.forEach((decl) => {
    if (!decl.includes(':')) {
      return;
    }

    const [key, value] = decl.split(':');
    const cleanKey = toCamelCase(key.trim());
    const cleanValue = value.trim();

    result[cleanKey] = cleanValue;
  });

  return result;
}

module.exports = convertToObject;
