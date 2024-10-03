'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style.length > 0);

  return styleDeclarations.reduce((acc, style) => {
    const [key, value] = style.split(':');

    if (key && value) {
      const cleanedKey = key.trim();
      const cleanedValue = value.trim();

      acc[cleanedKey] = cleanedValue;
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
