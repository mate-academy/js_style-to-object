'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const mainObj = {};

  const workArr = sourceString.split(';');

  const cleanArr = workArr
    .map(function (item) {
      const result = item.replace(/\n/g, '').trim();

      return result;
    })
    .filter((item) => item !== '');

  for (const pair of cleanArr) {
    const index = pair.indexOf(':');

    if (index > -1) {
      const key = pair.slice(0, index);
      const trimKey = key.trim();
      const value = pair.slice(index + 1);
      const trimValue = value.trim();

      mainObj[trimKey] = trimValue;
    }
  }

  return mainObj;
}

module.exports = convertToObject;
