'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newSource = sourceString
    .split(';')
    .map((sourceString) => sourceString.trim())
    .filter((sourceString) => sourceString.length > 0);

  const newLine = newSource.map((line) => line.split(':'));

  newLine.sort();

  const styleObject = Object.fromEntries(newLine);

  const cleanedObject = {};

  for (const key in styleObject) {
    const cleanedKey = key.trim();
    const cleanedValue = styleObject[key].trim();

    cleanedObject[cleanedKey] = cleanedValue;
  }

  return cleanedObject;
}

module.exports = convertToObject;
