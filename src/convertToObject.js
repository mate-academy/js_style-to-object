'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrStrings = sourceString
    .split(';')
    .map((str) => str.trim())
    .filter((str) => str.length !== 0)
    .map((item) => item.split(':').map((str) => str.trim()));

  const objStylesString = {};

  arrStrings.forEach(([key, value]) => {
    objStylesString[key] = value;
  });

  return objStylesString;
}

module.exports = convertToObject;
