'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';');

  const spaces = declarations.filter((line) => line.trim());

  const validDeclarations = spaces.map((item) => {
    const [key, value] = item.split(':');

    return [key.trim(), value.trim()];
  });

  const styleObject = Object.fromEntries(validDeclarations);

  return styleObject;
}

module.exports = convertToObject;
