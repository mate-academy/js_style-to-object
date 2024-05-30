'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let strToObject = sourceString
    .trim()
    .split(';')
    .filter((str) => str.trim());

  strToObject = strToObject.map((str) => {
    return str
      .trim()
      .split(':')
      .map((s) => s.trim());
  });

  strToObject = Object.fromEntries(strToObject);

  for (const key in strToObject) {
    if (strToObject[key] === undefined) {
      delete strToObject[key];
    }
  }

  return strToObject;
}
module.exports = convertToObject;
