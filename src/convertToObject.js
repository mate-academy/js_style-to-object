'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';') // Split by semicolon
    .map((decl) => decl.trim()) // Trim whitespace
    .filter((decl) => decl && decl.includes(':'))
    .map((decl) => {
      const [property, ...rest] = decl.split(':');
      const value = rest.join(':'); // In case value contains colons

      return [property.trim(), value.trim()];
    })
    .reduce((acc, [key, val]) => {
      if (key && val) {
        acc[key] = val;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
