'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = {};
  const styleDeclarations = sourceString.split(';');

  styleDeclarations.forEach((declaration) => {
    const [key, value] = declaration.split(':').map((item) => item.trim());

    if (key && value) {
      cssProperties[key] = value;
    }
  });

  return cssProperties;
}

module.exports = convertToObject;
