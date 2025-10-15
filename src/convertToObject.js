'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  function parseDeclaration(declarationString) {
    const [key, value] = declarationString.split(':').map((s) => s.trim());

    if (!key || !value) {
      return null;
    }

    return { [key]: value };
  }

  const objectStrings = sourceString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => parseDeclaration(s))
    .filter(Boolean);

  const stylesMap = objectStrings.reduce(
    (accumulator, item) => ({ ...accumulator, ...item }),
    {},
  );

  return stylesMap;
}

module.exports = convertToObject;
