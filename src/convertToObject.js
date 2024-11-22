'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const declarations = sourceString.split(';');

  for (let declaration of declarations) {
    // Trim spaces from each declaration
    declaration = declaration.trim();

    if (declaration === '' || !declaration.includes(':')) {
      continue;
    }

    const [key, value] = declaration.split(':');

    styleObject[key.trim()] = value.trim();
  }

  return styleObject;
}

module.exports = convertToObject;
