'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = {};

  sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter(Boolean)
    .forEach((rule) => {
      const colonIndex = rule.indexOf(':');

      if (colonIndex === -1) {
        return;
      }

      const propertyName = rule
        .slice(0, colonIndex)
        .replace(/^[ \t\r\n]+|[ \t\r\n]+$/g, '');

      const propertyValue = rule
        .slice(colonIndex + 1)
        // 🔥 KLUCZOWA LINIA – usuwa \n tylko z BRZEGÓW
        .replace(/^[\s\r\n]+|[\s\r\n]+$/g, '');

      if (propertyName) {
        cssProperties[propertyName] = propertyValue;
      }
    });

  return cssProperties;
}

module.exports = convertToObject;
