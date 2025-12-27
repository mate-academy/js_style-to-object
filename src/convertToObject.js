'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {}; // більш описова назва

  const declarations = sourceString.split(';');

  declarations.forEach((decl) => {
    const trimmed = decl.trim();

    if (!trimmed) {
      return;
    }

    const [key, value] = trimmed.split(':');

    if (key && value) {
      styleObject[key.trim()] = value.trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
