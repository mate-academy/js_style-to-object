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
  // write your code here
  const result = {};
  const entries = sourceString.split(';').map(item => item.split(':'));
  const sourseWithoutSpace = entries.map(item => item.map(i => i.trim()));

  for (let i = 0; i < sourseWithoutSpace.length; i++) {
    if (sourseWithoutSpace[i][1] === undefined) {
      i++;
    } else {
      result[sourseWithoutSpace[i][0]] = sourseWithoutSpace[i][1];
    }
  }

  return result;
}

module.exports = convertToObject;
