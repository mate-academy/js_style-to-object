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
  const clearArr = sourceString
    .split(';')
    .map(
      property => property
        .split(':').map(styleValue => styleValue.trim())
    )
    .filter(property => property.length > 1);

  const cssPropertyesObj = {};

  clearArr.forEach(prop => {
    cssPropertyesObj[prop[0]] = prop[1];
  });

  return cssPropertyesObj;
}

module.exports = convertToObject;
