/* eslint-disable no-eval */
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
  const sourceArr = sourceString.split(';').map(x => x.split(': '));
  const clearSourceArr = sourceArr.map(x => x.map(y => y.trim()));

  return clearSourceArr.filter(x => x[1] !== undefined).reduce((obj, item) => {
    return {
      ...obj,
      [item[0]]: item[1],
    };
  }, {});
}

module.exports = convertToObject;
