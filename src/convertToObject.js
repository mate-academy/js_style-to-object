'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const filtered = sourceString
    .split(/[:;]/)
    .map((s) => s.trim())
    .filter(Boolean);

  return filtered.reduce((acc, p, i) => {
    if (i % 2 === 0 && i + 1 < filtered.length) {
      acc[filtered[i]] = filtered[i + 1];
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
