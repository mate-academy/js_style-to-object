'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((codeCss) => codeCss.trim())
    .filter((trimCodeCss) => trimCodeCss.includes(':'))
    .reduce((stylesObject, currentLine) => {
      const colonIndex = currentLine.indexOf(':');

      const key = currentLine.substring(0, colonIndex).trim();

      const value = currentLine.substring(colonIndex + 1).replace(/^\s+/, '');

      stylesObject[key] = value;

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
