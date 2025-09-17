'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleSheet = {};

  const input = sourceString.split(';');

  const inputTrimmed = input.map((item) => item.trim());
  const inputFiltered = inputTrimmed.filter((item) => item.length >= 1);

  inputFiltered.forEach((item) => {
    const colonIndex = item.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const key = item.slice(0, colonIndex).trim();
    const value = item.slice(colonIndex + 1).trim();

    if (!key || !value) {
      return;
    }

    styleSheet[key] = value;
  });

  return styleSheet;
}
module.exports = convertToObject;
