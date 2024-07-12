'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringModified = sourceString
    .split(/;\s*/)
    .filter((value) => value.length)
    .map((item) => item.split(':').map((el) => el.trim()));

  return stringModified.reduce((prev, next) => {
    const acc = next[0];
    const value = next[1];

    prev[acc] = value;

    return prev;
  }, {});
}

module.exports = convertToObject;
