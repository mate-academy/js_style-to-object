'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const cleanedString = sourceString.replace(/;\s*;/g, ';');
  const regex = /\s*([^:\s]+)\s*:\s*([^;]+)\s*;?/g;
  let match;

  while ((match = regex.exec(cleanedString)) !== null) {
    const key = match[1].includes(';', 0)
      ? match[1].trim().slice(1)
      : match[1].trim();
    const value = match[2].includes(';', 0)
      ? match[2].trim().slice(1)
      : match[2].trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
