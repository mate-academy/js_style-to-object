'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');
  const cssProperties = {};

  styleDeclarations.forEach((declaration) => {
    if (declaration.trim() === '') {
      return;
    }

    const [property, value] = declaration.split(':').map((item) => item.trim());

    if (property && value) {
      cssProperties[property] = value;
    }
  });

  return cssProperties;
}

module.exports = convertToObject;
