'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
  .split(';')
  .map((element) => {
    return element
      .split(':')
      .map(el => el.trim())
  })
  .reduce((prev, current) => ({...prev, [current[0]] : current[1]}),{})
}

module.exports = convertToObject;
