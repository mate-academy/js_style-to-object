'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  const declarations = sourceString
    .split(/;(?![^(]*\))/)
    .map((decl) => decl.trim())
    .filter((decl) => decl);

  declarations.forEach((declaration) => {
    const [property, ...valueParts] = declaration.split(':');
    const value = valueParts.join(':').trim();

    if (property && value) {
      stylesObject[property.trim()] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
