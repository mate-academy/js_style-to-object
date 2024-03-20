'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const pairs = sourceString
    .split(';')
    .map((pair) => pair.trim())
    .filter((pair) => pair !== '');

  const newObject = {};

  pairs.forEach((pair) => {
    const [key, value] = pair.split(':');

    newObject[key.trim()] = value.trim();
  });

  return newObject;
}

module.exports = convertToObject;
