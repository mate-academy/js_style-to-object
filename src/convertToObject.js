'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssToFix = sourceString
    .replaceAll('\n', '')
    .replace(/;/g, ';\n')
    .replace(/ *: ?/, ':')
    .split('\n')
    .filter((line) => line.trim() !== '' && line.trim() !== ';');
  const sheetCSS = {};

  for (const line of cssToFix) {
    const elementCSS = line.trim().replace(';', '').split(':');

    if (elementCSS[1].includes(',')) {
      elementCSS[1] = elementCSS[1].replaceAll(',', ',\n');
    }

    sheetCSS[elementCSS[0].trim()] = elementCSS[1].trim();
  }

  return sheetCSS;
}

module.exports = convertToObject;
