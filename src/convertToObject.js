'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const cleanSource = sourceString.replace(/\/\*[\s\S]*?\*\//g, '').trim();

  const declarations = cleanSource
    .split(';')
    .filter((declaration) => declaration.trim() !== '');

  if (!declarations || declarations.length === 0) {
    return result;
  }

  declarations.forEach((declaration) => {
    const trimmedDeclaration = declaration.trim();

    if (trimmedDeclaration.length === 0) {
      return;
    }

    const colonIndex = trimmedDeclaration.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const key = trimmedDeclaration.substring(0, colonIndex).trim();
    let value = trimmedDeclaration.substring(colonIndex + 1).trim();

    if (value.endsWith(';')) {
      value = value.slice(0, -1);
    }

    if (key && value) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
