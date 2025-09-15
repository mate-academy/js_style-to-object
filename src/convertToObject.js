'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const toObject = sourceString
    .trim()
    .split(';')
    .map((element) => {
      return element.trim();
    })
    .filter((element) => {
      return element.length > 0;
    })
    .map((element) => {
      const idx = element.indexOf(':');

      if (idx >= 0) {
        const key = element.slice(0, idx).trim();
        const value = element.slice(idx + 1).trim();

        return [key, value];
      } else {
        return null;
      }
    })
    .reduce((acc, [key, value]) => {
      const property = (key || '').trim();
      const val = (value || '').trim();

      if (property && val) {
        acc[property] = val;
      }

      return acc;
    }, {});

  return toObject;
}

module.exports = convertToObject;
