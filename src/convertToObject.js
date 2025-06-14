'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const cleanSource = sourceString.replace(/\/\*[\s\S]*?\*\//g, '').trim();
  const declarations = cleanSource.match(/([^;]+);?/g);

  if (!declarations) {
    return result;
  }

  declarations.forEach((declaration) => {
    const trimmedDeclaration = declaration.trim();

    const colonIndex = trimmedDeclaration.indexOf(':');

    if (colonIndex === -1 || trimmedDeclaration.length === 0) {
      return;
    }

    const key = trimmedDeclaration.substring(0, colonIndex).trim();

    let value = trimmedDeclaration.substring(colonIndex + 1);

    value = value.trimStart();

    if (value.endsWith(';')) {
      value = value.slice(0, -1);
    }

    value = value.trimEnd();

    if (key && value) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
