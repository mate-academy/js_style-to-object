'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const list = sourceString
    .split(';')
    .map(item => item.trim())
    .filter(el => el.length > 0)
    .map(item => item.split(':')
      .map(i => i.trim()));

  return Object.fromEntries(list);
}

module.exports = convertToObject;
