'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const cssDeclarations = stylesString.split(';');

  const result = cssDeclarations.reduce((acc, declaration) => {
    const [key, value] = declaration.split(':').map((part) => part.trim());

    if (key && value) {
      acc[key] = value;
    }

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
