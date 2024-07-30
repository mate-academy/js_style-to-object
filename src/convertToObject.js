'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const lines = stylesString.trim().split('\n');
  const cleanedLines = lines.filter((line) => line.trim() !== '');

  const cleanedString = cleanedLines.join('\n');
  const declarations = cleanedString.split(';');

  const styleObject = {};

  declarations.forEach((declaration) => {
    const [key, value] = declaration.split(':').map((part) => part.trim());

    if (key && value) {
      styleObject[key] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
