'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';');
  const rules = {};

  for (const declaration of declarations) {
    const [property, value] = declaration.split(':').map((i) => i.trim());

    if (property.length !== 0) {
      rules[property] = value;
    }
  }

  return rules;
}

module.exports = convertToObject;
