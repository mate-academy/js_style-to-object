'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return Object.fromEntries(
    sourceString
      .split('\n')
      .map(x => x.replace(/\s+/g, ' ').trim().slice(0, -1).trimEnd())
      .filter(x => x.length > 1)
      .map(x => x.split(/ ?: /))
  );
}

module.exports = convertToObject;
