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
  const sourceArr = sourceString.split(';').map(words => words.split(': '));
  const clearSourceArr = sourceArr
    .map(word => word.map(letter => letter.trim())
    );

  return clearSourceArr
    .filter(word => word[1] !== undefined).reduce((obj, item) => {
      return {
        ...obj,
        [item[0]]: item[1],
      };
    }, {}
    );
}

module.exports = convertToObject;
