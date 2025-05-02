'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const strToObject = sourceString
    .split(';')
    .map((value) => value.trim())
    .filter((value) => value.length)
    .reduce((prev, value) => {
      const [key, ...val] = value.split(':');

      prev[key.trim()] = val.join('').trim();

      return prev;
    }, {});

  return strToObject;
}

module.exports = convertToObject;
