'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObj = {};

  const cssDeclarations = sourceString.split(';');

  cssDeclarations.forEach((declaration) => {
    declaration.trim();

    if (!declaration) {
      return;
    }

    const [property, value] = declaration.split(':').map((item) => item.trim());

    if (property && value) {
      newObj[property] = value;
    }
  });

  return newObj;
}

module.exports = convertToObject;
