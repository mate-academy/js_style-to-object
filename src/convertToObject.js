'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // write your code here
  const splittedString = sourceString
    .split(';')
    .map((item) => item.split(':'))
    .map((item) => item.map((value) => value.trim()))
    .reduce((object, itemObj) => {
      object[itemObj[0]] = itemObj[1];

      return object;
    }, {});

  return splittedString;
}

module.exports = convertToObject;
