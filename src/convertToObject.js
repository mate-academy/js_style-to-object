'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleEntries = sourceString
    .split(';')
    .filter((declaration) => declaration.includes(':'))
    .map((declaration) => {
      const separatorIndex = declaration.indexOf(':');
      const cssProperty = declaration.slice(0, separatorIndex).trim();
      const cssValue = declaration.slice(separatorIndex + 1).trim();

      return [cssProperty, cssValue];
    });

  return Object.fromEntries(styleEntries);
}

module.exports = convertToObject;
