'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrSourceString = sourceString.split(';');
  const result = {};

  for (let i = arrSourceString.length - 1; i >= 0; i--) {
    arrSourceString[i] = arrSourceString[i].trim();

    if (arrSourceString[i] === '') {
      arrSourceString.splice(i, 1);
    }
  }

  for (let i = 0; i < arrSourceString.length; i++) {
    const splitData = arrSourceString[i].split(':');

    if (splitData[0].trim() !== '' && splitData[1].trim() !== '') {
      result[splitData[0].trim()] = splitData[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
