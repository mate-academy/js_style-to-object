'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const keyValuePairs = sourceString
    .split(';')
    .map((style) => style.split(':').map((part) => part.trim()))
    .filter((declaration) => declaration.length === 2);

  return Object.fromEntries(keyValuePairs);
}

module.exports = convertToObject;
