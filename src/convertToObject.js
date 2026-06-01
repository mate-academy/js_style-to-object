'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  const lines = sourceString.split(';');

  const filtered = lines
    .map((line) => line.replaceAll(';', ''))
    .filter((line) => line.trim() !== '');

  const keyValues = filtered.map((line) => line.split(':', 2));

  keyValues.forEach(([key, value]) => {
    stylesObject[key.trim()] = value.trim();
  });

  return stylesObject;
}

module.exports = convertToObject;
