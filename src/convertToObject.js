'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cleanedString = sourceString
    .replace(/;\s*$/, '')

    .replace(/\s*:\s*/g, ':');

  const declarations = cleanedString.split(';');

  return declarations.reduce((result, declaration) => {
    const [property, ...valueParts] = declaration.split(':');

    if (property.trim()) {
      result[property.trim()] = valueParts.join(':').trim();
    }

    return result;
  }, {});
}

module.exports = convertToObject;
