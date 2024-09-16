'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let obj = {};
  const arr = sourceString.split(';')
    .map(item => item.trim())
    .filter(Boolean)
    .map(item => item.split(':')
      .map(el => el.trim()));

  obj = Object.fromEntries(arr);

  return obj;
}

module.exports = convertToObject;
