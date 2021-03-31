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
  const objectStylesCSS = {};
  const arrStylesCSS = sourceString
    .split('\n')
    .join('')
    .split(';')
    .map(item => item.split(':').map(str => str.trim()));

  arrStylesCSS.forEach(function(item) {
    if (item[0].length) {
      objectStylesCSS[item[0]] = item[1];
    }
  });

  return objectStylesCSS;
}

module.exports = convertToObject;
