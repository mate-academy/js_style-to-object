'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parts = sourceString.split(`;`);
  const trimmed = parts.map((x) => x.trim());
  const filtered = trimmed.filter((x) => x.length > 0);
  const pair = filtered.map((x) => x.split(`:`));
  const result = pair.reduce((acc, x) => {
    acc[x[0].trim()] = x[1].trim();

    return acc;
  }, {});

  return result;
}
module.exports = convertToObject;
