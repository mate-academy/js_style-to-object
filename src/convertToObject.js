'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cleanStr = sourceString.split(';');

  return cleanStr.reduce((parsedStyles, line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      return parsedStyles;
    }

    const colonIndex = trimmedLine.indexOf(':');
    const key = trimmedLine.slice(0, colonIndex).trim();
    const value = trimmedLine.slice(colonIndex + 1).trim();

    parsedStyles[key] = value;

    return parsedStyles;
  }, {});
}

module.exports = convertToObject;
