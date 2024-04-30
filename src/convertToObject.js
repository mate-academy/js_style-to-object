'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const pairs = sourceString.split(';');

  const object = {};

  for (const pair of pairs) {
    const split = pair.split(':');

    if (split.length !== 1) {
      object[split[0].trim()] = split[1].trim();
    }
  }

  return object;
}

module.exports = convertToObject;
