'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const RESULT = {};
  const declarations = sourceString
    .split(';')
    .filter((declaration) => declaration.length > 0);

  declarations.forEach((declaration) => {
    const [property, value] = declaration.split(':').map((part) => part.trim());

    if (property && value) {
      RESULT[property] = value;
    }
  });

  return RESULT;
}

module.exports = convertToObject;
