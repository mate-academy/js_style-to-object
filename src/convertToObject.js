'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const cssProperties = {};

  const tempString = sourceString
    .split(';')
    .filter((item) => item.trim() !== '')
    .map((item) => item.split(':'));

  tempString.forEach((item) => {
    if (!(item[1] === undefined)) {
      cssProperties[item[0].trim()] = item[1].trim();
    }
  });

  return cssProperties;
}

module.exports = convertToObject;
// 'Finish version'
