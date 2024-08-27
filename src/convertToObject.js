'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styleObject = {};

  const tempString = sourceString
    .toString()
    .split(';')
    .map((item) => item.toString().split(':'));

  tempString.forEach((item) => {
    if (!(item[1] === undefined)) {
      styleObject[item[0].trim()] = item[1].trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
