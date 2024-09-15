'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const styleArr = sourceString.split(';');

  for (let i = 0; i < styleArr.length - 1; i++) {
    const item = styleArr[i].trim().split(': ');
    obj[item[0]] = item[1];
  }

  return obj;
}

module.exports = convertToObject;
