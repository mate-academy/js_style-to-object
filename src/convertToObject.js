'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(source) {
  const result = {};

  const declarations = source
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  for (const declaration of declarations) {
    const [property, ...valueParts] = declaration.split(':');
    const check = property ? property.trim() : undefined;
    const value = valueParts.join(':').trim();

    if (check && value) {
      result[check] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
