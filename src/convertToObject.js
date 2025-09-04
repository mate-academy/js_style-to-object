'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  const cleanedString = sourceString.replace(/[\r\t]/g, ' ');

  const declarations = cleanedString.split(';');

  const stylesObject = declarations.reduce((stylesMap, rule) => {
    if (!rule.trim()) {
      return stylesMap;
    }

    const parts = rule.split(':');

    if (parts.length < 2) {
      return stylesMap;
    }

    const property = parts[0].trim();
    const value = parts.slice(1).join(':').trim();

    if (property && value) {
      stylesMap[property] = value;
    }

    return stylesMap;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
