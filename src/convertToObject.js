'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(cssString) {
  const cssDeclarations = cssString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.includes(':'));

  const entries = cssDeclarations.map((line) => {
    const colonIndex = line.indexOf(':');
    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();

    return [key, value];
  });

  return Object.fromEntries(entries);
}
module.exports = convertToObject;
