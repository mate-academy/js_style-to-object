'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayFromString = sourceString
    .split(';')
    .filter(item => item.trim() !== '')
    .map(item => {
      const [key, value] = item.split(':');

      return [key.trim(), value.trim()];
    })

  return Object.fromEntries(arrayFromString);
}

module.exports = convertToObject;
