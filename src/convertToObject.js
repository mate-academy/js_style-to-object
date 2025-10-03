'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (!sourceString) {
    return result;
  }

  const regex = /([\w-]+)\s*:\s*([^;]+);?/gms;
  let match;

  while ((match = regex.exec(sourceString)) !== null) {
    const key = match[1].trim();
    const value = match[2].trim();

    if (key) {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
