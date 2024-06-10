'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyleObject = {};
  const declarations = sourceString.split(';');

  declarations
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration)
    .forEach((declaration) => {
      const newDeclaration = declaration.trim();

      const [property, value] = newDeclaration
        .split(':')
        .map((part) => part.trim());

      if (property && value) {
        cssStyleObject[property] = value;
      }
    });

  return cssStyleObject;
}

module.exports = convertToObject;
