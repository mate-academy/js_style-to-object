'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  const splitted = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.length > 0 && item.includes(':'));

  for (const s of splitted) {
    const [key, value] = s.split(':').map((item) => item.trim());

    if (key) {
      obj[key] = value;
    }
  }

  return obj;
}

module.exports = convertToObject;
