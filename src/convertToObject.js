'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString.split(';').reduce(
    (prew, item) => ({
      ...prew,
      [String(item.split(':')[0]).trim()]: String(item.split(':')[1]).trim(),
    }),
    {},
  );

  for (const key of Object.keys(result)) {
    if (key === '') {
      delete result[key];
    }
  }

  return result;
}

module.exports = convertToObject;
