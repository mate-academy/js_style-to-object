'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');
  const filteredArr = arr.filter(item => item.includes(':'));
  const readyArr = new Map(filteredArr
    .map(item => item.split(':').map(str => str.trim())));

  return Object.fromEntries(readyArr);
}

module.exports = convertToObject;
