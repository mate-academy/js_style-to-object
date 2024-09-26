'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const splittedStr = sourceString.replace(/\n/g, '')
    .split(';')
    .map(item => item.trim())
    .filter(item => item.length > 0);

  for (let i = 0; i < splittedStr.length; i++) {
    const arrItem = splittedStr[i].split(':');

    if (arrItem.length > 1) {
      obj[arrItem[0].trim()] = arrItem[1].trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
