'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObj = {};

  if (!sourceString) {
    return cssObj;
  }

  sourceString
    .split(';')
    .map((s) => `${s}`.trim().split(':'))
    .forEach((line) => {
      const key = `${line[0]}`.trim();
      const value = `${line[1]}`.trim();

      if (line && key) {
        cssObj[key] = value || '';
      }
    });

  return cssObj;
}

module.exports = convertToObject;
