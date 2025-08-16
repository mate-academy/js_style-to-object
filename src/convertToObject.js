'use strict';

/**
 * Converts CSS string to JS object
 * @param {string} sourceString - CSS string to parse
 * @return {Object} - JS object with CSS properties
 */
function convertToObject(sourceString) {
  const styleMap = {}; // Variável renomeada para compliance

  if (!sourceString.trim()) return styleMap;

  sourceString.split(';').forEach(rule => {
    const trimmedRule = rule.trim();
    if (!trimmedRule) return;

    const colonIndex = trimmedRule.indexOf(':');
    if (colonIndex === -1) return;

    const property = trimmedRule.slice(0, colonIndex).trim();
    const value = trimmedRule.slice(colonIndex + 1).trim();

    if (property && value) {
      styleMap[property] = value;
    }
  });

  return styleMap;
}

module.exports = convertToObject;


