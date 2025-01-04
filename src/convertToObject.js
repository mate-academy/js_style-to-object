'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const declarations = sourceString
    .split(';')
    .map((decl) => decl.trim())
    .filter((decl) => decl);

  for (const declaration of declarations) {
    const [property, ...valueParts] = declaration.split(':');

    if (property && valueParts.length) {
      const key = property.trim();
      const value = valueParts.join(':').trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
