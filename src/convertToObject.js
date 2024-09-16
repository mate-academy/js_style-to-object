'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newArr = sourceString.split(';');

  const result = {};

  for (let i = 0; i < newArr.length - 1; i++) {
    const tempObj = newArr[i].split(':');

    result[tempObj[0].substr(3)] = tempObj[1].substr(1);
  }

  return result;
}

module.exports = convertToObject;
