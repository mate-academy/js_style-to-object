'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split(';');

  return lines.reduce((stylesObject, line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine || !trimmedLine.includes(':')) {
      return stylesObject;
    }

    const colonIndex = trimmedLine.lastIndexOf(':');
    const key = trimmedLine.slice(0, colonIndex).trim();
    const value = trimmedLine.slice(colonIndex + 1).trim();

    stylesObject[key] = value;

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
