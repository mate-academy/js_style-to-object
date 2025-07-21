'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const allMeaning = sourceString.split(';');
  const obj = {};

  for (const meaning of allMeaning) {
    if (!meaning.trim()) {
      continue;
    }

    const [key, value] = meaning.split(':').map((str) => str.trim());

    obj[key] = value;
  }

  return obj;
}

module.exports = convertToObject;
