'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const SOURCE_ARRAY = sourceString.split(';').filter((entry) => entry.trim());

  const KEYS_ARRAY = SOURCE_ARRAY.map((word) => {
    return word.slice(0, word.indexOf(':')).trim();
  });

  const VALUES_ARRAY = SOURCE_ARRAY.map((word) => {
    return word.slice(word.indexOf(':') + 1).trim();
  });

  const RESULT = {};

  for (let i = 0; i < KEYS_ARRAY.length; i++) {
    RESULT[KEYS_ARRAY[i]] = VALUES_ARRAY[i];
  }

  return RESULT;
}

module.exports = convertToObject;
