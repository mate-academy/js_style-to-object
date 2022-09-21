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
  const stylesObjects = {};
  const stylesArray = sourceString
    .split(';')
    .map(trim1 => trim1.trim()
      .split(':')
      .map(trim2 => trim2.trim()))
    .filter(trim3 => trim3.length > 1);

  stylesArray.forEach(function(elem) {
    stylesObjects[elem[0]] = elem[1];
  });

  return stylesObjects;
}

module.exports = convertToObject;
