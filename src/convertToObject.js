'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  if (sourceString === '') {
    return {};
  }

  const refinedStr = sourceString.replace(/\t\r\n/gm, '');

  const srcArr = refinedStr.split(/[;]/);

  const trimArr = srcArr.map((x) => x.trim());

  const filterArr = trimArr.filter((subArray) => subArray.length > 0);

  const splitArr = filterArr.map((x) => x.split(':'));

  const objArr = splitArr.map((el) => ({
    [el[0].trim()]: el[1].trim(),
  }));

  const retObj = Object.assign({}, ...objArr);

  return retObj;
}

module.exports = convertToObject;
