'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stringArray = sourceString
    .split(';')
    .map(element => element.trim())
    .filter(element => element !== '');

  const newObj = {};

  for (let i = 0; i < stringArray.length; i++) {
    const arrayProperty = stringArray[i].split(':');

    if (arrayProperty[0]) {
      newObj[arrayProperty[0].trim()] = arrayProperty[1].trim();
    }
  }

  return newObj;
}

module.exports = convertToObject;
