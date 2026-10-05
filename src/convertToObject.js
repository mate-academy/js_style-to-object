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
    .filter((declaration) => declaration.length > 0)
    .filter((declaration) => declaration.includes(':'));

  const propertyAndValuePairs = declarations.map((declaration) => {
    const separatorIndex = declaration.indexOf(':');

    return [
      declaration.slice(0, separatorIndex).trim(),
      declaration.slice(separatorIndex + 1).trim(),
    ];
  });

  return Object.fromEntries(propertyAndValuePairs);
}

module.exports = convertToObject;
