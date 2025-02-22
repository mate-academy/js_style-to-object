'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const partsOfString = sourceString.trim().split(';');
  const splitedParts = partsOfString.map((part) => part.split(':'));
  const arrOfSParts = [];
  const result = {};

  for (const el of splitedParts) {
    for (let i = 0; i < el.length; i++) {
      if (el.length > 1) {
        arrOfSParts.push(el[i].trim());
      }
    }
  }

  for (let i = 1; i <= arrOfSParts.length; i += 2) {
    result[arrOfSParts[i - 1]] = arrOfSParts[i];
  }

  return result;
}

module.exports = convertToObject;
