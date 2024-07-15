'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const cleanedSourceString = sourceString.replace(/\s*;\s*/g, ';').trim();
  const strArray = cleanedSourceString.split(';');
  const result = {};

  strArray.forEach((str) => {
    const [key, value] = str.split(':').map((s) => s.trim());

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
