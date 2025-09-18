'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = {};
  const stringValues = sourceString.split(';');

  stringValues.forEach((row) => {
    const trimmedRow = row.trim();

    if (!trimmedRow) {
      return;
    }

    const colonIndex = trimmedRow.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const propertyName = trimmedRow.slice(0, colonIndex).trim();
    const propertyValue = trimmedRow.slice(colonIndex + 1).trim();

    if (!propertyName) {
      return;
    }

    cssStyles[propertyName] = propertyValue;
  });

  return cssStyles;
}

module.exports = convertToObject;
