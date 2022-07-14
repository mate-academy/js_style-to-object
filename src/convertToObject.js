'use strict';

/**
 * Implement convertToObject function:
 *

 * and returns an object where CSS properties are keys

 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObj = {};

  sourceString.split(';')
    .map(style => {
      let styleCut = style;

      while (styleCut.startsWith('\n')) {
        styleCut = styleCut.slice(1);
      }

      return styleCut;
    })
    .map(item => item.split(':'))
    .filter(el => el.length === 2)
    .forEach((element, index, arr) => {
      stylesObj[arr[index][0].trim()] = arr[index][1].trim();
    });

  return stylesObj;
}

module.exports = convertToObject;
