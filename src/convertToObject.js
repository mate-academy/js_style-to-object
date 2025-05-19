'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split(';');

  const result = lines.reduce((acc, curr) => {
    const clean = curr.trim();

    if (clean.includes(':')) {
      const parts = clean.split(':', 2);
      const clean1 = parts[0].trim();
      const clean2 = parts[1].trim();

      acc[clean1] = clean2;

      return acc;
    }

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
