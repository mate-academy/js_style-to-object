'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesEntries = sourceString.split(';')
    .map(str => str.trim())
    .filter(str => str !== '\n' && str !== '')
    .map(str => str.split(':')
      .map(item => item.trim()));

  return Object.fromEntries(stylesEntries);
}

module.exports = convertToObject;
