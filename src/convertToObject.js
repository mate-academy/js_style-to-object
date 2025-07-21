'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const ar = sourceString.split(';');

  for (const x of ar) {
    const sp = x.trim().split(':');

    if (sp.length < 2) {
      continue;
    }

    const key = sp[0].trim();
    const value = sp[1].trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
