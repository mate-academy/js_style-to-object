'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const arrayOfStrings = sourceString
    .split(';')
    .map((str) => str.trim())
    .filter((str) => str.length > 0);
  for (const str of arrayOfStrings) {
    const [key, ...val] = str.split(':');

    if (key.length > 0 && val.length > 0) {
      const value = val.join(':').trim();

      result[key.trim()] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
