'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const stylesObject = {};

  if (!sourceString) {
    return stylesObject;
  }

  const stringWithoutComments = sourceString.replace(
    /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    '',
  );

  const matches = stringWithoutComments.match(/(?:[^;"']|"[^"]*"|'[^']*')+/g);
  const cssDeclarations = matches
    ? matches.map((decl) => decl.trim()).filter((decl) => decl)
    : [];

  cssDeclarations.forEach((declaration) => {
    const [property, ...valueParts] = declaration.split(':');
    const value = valueParts.join(':').trim();

    if (property && value) {
      const trimmedProperty = property.trim();

      if (trimmedProperty) {
        stylesObject[trimmedProperty] = value;
      }
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
