'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {

  let sourceList = sourceString.split(';');
  const sourceStringList = {};
  sourceList.pop();

  for (let key of sourceList) {
    const keyString = key.split(':');
    sourceStringList[keyString[0].trim()] = keyString[1].trim();
  }
  return sourceStringList;
}

module.exports = convertToObject;
