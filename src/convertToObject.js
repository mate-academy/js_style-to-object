'use strict';
/* eslint-disable */
/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const separate = sourceString.split(';');
  const separateSplit = separate.map((style) => style.split(':').map((str) => str.trim()));

  for (const [key, value] of separateSplit) {
    if (key && value) {
      obj[key] = value;
    }
  }

  return obj;
}

module.exports = convertToObject;
