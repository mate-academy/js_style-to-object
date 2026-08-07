'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const solution = {};

  sourceString.split(';').forEach((style) => {
    const [k, v] = style.split(':');

    if (k && v) {
      solution[k.trim()] = v.trim();
    }
  });

  return solution;
}

module.exports = convertToObject;
