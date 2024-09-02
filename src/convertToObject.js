'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const cleanedString = stylesString
    .trim()
    .split('\n')
    .filter((line) => line.trim() !== '')
    .join('\n');

  const declarations = cleanedString.split(';');

  return declarations.reduce((styleObject, declaration) => {
    const [key, value] = declaration.split(':').map((part) => part.trim());

    if (key && value) {
      styleObject[key] = value;
    }

    return styleObject;
  }, {});
}

module.exports = convertToObject;
