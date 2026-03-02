'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newStyleString = {};
  const eachWord = sourceString.split(/[;:]/).map((el) => el.trim());

  const temp = eachWord.filter((el) => el !== '');

  for (let i = 0; i < temp.length; i += 2) {
    newStyleString[temp[i]] = temp[i + 1];
  }

  return newStyleString;
}

module.exports = convertToObject;
