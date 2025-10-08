'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const CSSDeclarations = {};
  const splittedString = sourceString.split(';');
  const declarationsTrimmed = splittedString.map((s) => s.trim()).filter((s) => s.length > 0);

  declarationsTrimmed.forEach((element) => {
    const colonIndex = element.indexOf(':');

    if (colonIndex < 0) {
      return;
    }

    const key = element.slice(0, colonIndex).trim();
    const value = element.slice(colonIndex + 1).trim();

    if (!key) {
      return;
    }

    CSSDeclarations[key] = value;
  });

  return CSSDeclarations;
}

module.exports = convertToObject;
