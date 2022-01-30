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
  const fixedArr = sourceString.split(';')
    .map(element => element.split(':')
      .map(value => value.trim()))
    .filter(el => el.length > 1);

  const stylesObj = Object.fromEntries(fixedArr);

  return stylesObj;
}

module.exports = convertToObject;
