'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitedString = sourceString.split(';');

  const result = splitedString
    .filter((item) => item.trim())
    .map((item) => {
      const [key, value] = item.split(':');

      return { [key.trim()]: value.trim() };
    })
    .reduce((acc, item) => ({ ...acc, ...item }), {});

  return result;
}

module.exports = convertToObject;
