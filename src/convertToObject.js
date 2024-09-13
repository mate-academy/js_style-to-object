'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .map((arrKeyAndValue) => arrKeyAndValue.split(':'))
    .filter((item) => item.length > 1)
    .reduce((objectRes, arrTwoWords) => {
      objectRes[arrTwoWords[0].trim()] = arrTwoWords[1].trim();

      return objectRes;
    }, {});
}

module.exports = convertToObject;
