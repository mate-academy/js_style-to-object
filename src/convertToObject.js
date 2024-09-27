'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const sourceArr = sourceString.split('\n')
    .map(item => item.trim())
    .filter(item => item.length > 1)
    .map(item => item.split(':').map(subItem => subItem.trim()));

  for (const pair of sourceArr) {
    result[pair[0]] = pair[1].replace(';', '').trim();
  }

  return result;
}

module.exports = convertToObject;
