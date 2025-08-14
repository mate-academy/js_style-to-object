'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parts = sourceString
    .split(';')
    .map((value) => value.trim())
    .filter((smt) => smt !== '');

  const keysAndValues = parts.map((item) => {
    return item.split(':').map((pairs) => pairs.trim());
  });

  return Object.fromEntries(keysAndValues);
}

module.exports = convertToObject;
