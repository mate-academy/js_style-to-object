'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');

  const validDeclarations = styleDeclarations
    .map((declaration) => declaration.trim())
    .filter(
      (declaration) => declaration.length > 0 && declaration.includes(':'),
    );

  const propertyValuePairs = validDeclarations.map((declaration) => {
    const [key, ...valueParts] = declaration.split(':');

    return [key.trim(), valueParts.join(':').trim()];
  });

  return Object.fromEntries(propertyValuePairs);
}

module.exports = convertToObject;
