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

  const result = {};

  /* const newStr = sourceString.split(';');

  for (const str of newStr) {
    const [key, value] = str.split(':');

    if (key && value) {
      result[key.trim()] = value.trim();
    }
  } */
  sourceString.split(';').forEach((item) => {
    const [key, value] = item.split(':');

    if (key && value) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
