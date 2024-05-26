'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const separatedByLines = sourceString
    .split(';')
    .filter((line) => line.trim() !== '');
  const stringObj = {};

  for (const item of separatedByLines) {
    const separetedItem = item.split(':');
    const key = separetedItem[0].trim();
    const value = separetedItem[1].trim();

    stringObj[key] = value;
  }

  return stringObj;
}

module.exports = convertToObject;
