'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const strArray = sourceString.split(';');

  for (let i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i]
      .trim()
      .split(':')
      .map((el) => el.trim());
  }

  const filtArray = strArray.filter((prop) => prop.length > 1);

  const resObject = {};

  for (const pr of filtArray) {
    resObject[pr[0]] = pr[1];
  }

  return resObject;
}

module.exports = convertToObject;
