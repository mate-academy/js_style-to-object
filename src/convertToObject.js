'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.length) {
    return {};
  }

  const properties = sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration !== '');

  return properties.reduce((stylesObject, property) => {
    const colonIndex = property.indexOf(':');

    if (colonIndex === -1) {
      return stylesObject;
    }

    const key = property.slice(0, colonIndex).trim();
    const value = property.slice(colonIndex + 1).trim();

    if (!key) {
      return stylesObject;
    }

    stylesObject[key] = value;

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
