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
  const strToArr = sourceString.split(`\n`)
    .map(el => el.trim().replace(`;`, ``))
    .filter(el => el !== ``)
    .map(el => el.split(`:`));

  const convertedObj = strToArr.reduce((acc, el, index) => {
    const key = el[0].trim();
    const value = el[1].trim();

    acc[key] = value;

    return acc;
  }, {});

  return convertedObj;
}

module.exports = convertToObject;
