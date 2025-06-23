'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const cssObject = {};

  const declarations = sourceString
    .split(';')
    .map((element) => element.trim())
    .filter((element) => element.includes(':'));

  for (let style = 0; style < declarations.length; style++) {
    const [key, value] = declarations[style].split(':');

    if (key && value) {
      cssObject[key.trim()] = value.trim();
    }
  }

  return cssObject;
}

module.exports = convertToObject;
