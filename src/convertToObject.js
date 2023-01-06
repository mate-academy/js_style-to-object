'use strict';

/**
 * Implement convertToObject function:
 *

 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylesObject = {};

  const stylesArr = sourceString
    .trim()
    .split(';');

  stylesArr.map(item => {
    const el = item.split(':');

    if (el[1]) {
      stylesObject[el[0].trim()] = item
        .split(':')[1]
        .trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
