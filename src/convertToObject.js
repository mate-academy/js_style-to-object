'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(part => part.trim())
    .filter(part => part && part.includes(':'))
    .map(part => {
      const colonIndex = part.indexOf(':');
      const key = part.slice(0, colonIndex).replace(/\s+/g, '');
      const value = part.slice(colonIndex + 1).trim();
      return [key, value];
    })
    .filter(([key]) => key)
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
}

module.exports = convertToObject;
