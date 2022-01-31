'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedToObject = {};

  const tempArray = sourceString
    .split(';')
    .map(item => item.trim())
    .filter(item => item.length !== 0)
    .map(
      item => item.split(':').map(itemIn => itemIn.trim())
    );

  for (const arrayCoupel of tempArray) {
    convertedToObject[arrayCoupel[0]] = arrayCoupel[1];
  }

  return convertedToObject;
}

module.exports = convertToObject;
