'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const initial = sourceString.replace(/\n/g, '').split(';');

  const result = initial
    .map((row) => {
      const parts = row.split(':');

      return parts.map((part) => part.trim());
    })
    .filter((item) => item.length > 1);

  result.forEach(([key, value], i) => {
    if (value.split(',').length > 1) {
      result[i][1] = value.split(',').join(',\n');
    }
  });

  return result.reduce((acc, [key, value]) => {
    return { ...acc, [key]: value };
  }, {});
}

module.exports = convertToObject;
