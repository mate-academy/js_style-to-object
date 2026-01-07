'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const declarations = sourceString.split(';');

  for (let i = 0; i < declarations.length; i++) {
    let declaration = declarations[i];

    declaration = declaration.trim();

    if (declaration === '' || !declaration.includes(':')) {
      continue;
    }

    const colonIndex = declaration.indexOf(':');
    const key = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
