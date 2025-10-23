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
    .filter((decl) => decl.includes(':'));

  for (const decl of declarations) {
    const [property, ...valueParts] = decl.split(':');
    const key = property.trim();
    const value = valueParts.join(':').trim();

    if (key && value) {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
