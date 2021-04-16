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
  const splitArr = sourceString.split(';').map(item => item.trim());
  const cssArr = splitArr.filter(function(item) {
    return item.length > 0;
  });

  cssArr.forEach(x => {
    const tempSelector = x.split(':').map(item => item.trim());

    result[tempSelector[0]] = tempSelector[1];
  });

  return result;
}

module.exports = convertToObject;
