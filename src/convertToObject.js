'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  const rules = sourceString.split(';');

  rules.forEach((rule) => {
    const colonIndex = rule.indexOf(':');

    if (colonIndex !== -1) {
      const key = rule.slice(0, colonIndex).trim();
      const value = rule.slice(colonIndex + 1).trim();

      stylesObject[key] = value;
    }
  });


  return stylesObject;
}

module.exports = convertToObject;
