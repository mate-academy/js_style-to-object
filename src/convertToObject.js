'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObj = {};

  const source = sourceString.split(';');

  source.forEach((split) => {
    if (split.trim()) {
      const [key, value] = split.split(':');

      newObj[key.trim()] = value.trim();
    }
  });

  return newObj;
}

module.exports = convertToObject;
