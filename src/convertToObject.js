'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const strToArr = sourceString.split(`\n`)
    .map(el => el.trim().replace(`;`, ``))
    .filter(el => el !== ``)
    .map(el => el.split(`:`));

  for (const el of strToArr) {
    const key = el[0].trim();
    const value = el[1].trim();

    obj[key] = value;
  }

  return obj;
}

module.exports = convertToObject;
