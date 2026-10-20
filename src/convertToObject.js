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

  const RESULT = KEYS_ARRAY.reduce((acc, key, index) => {
    acc[key] = VALUES_ARRAY[index];

    return acc;
  }, {});

  return RESULT;
}

module.exports = convertToObject;
