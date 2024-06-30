'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylePairs = sourceString
    .split(';')
    .map((el) => el.split(':'))
    .filter((el) => el.length > 1);

  const styleObj = {};

  stylePairs.forEach((el) => (styleObj[el[0].trim()] = el[1].trim()));

  return styleObj;
}

module.exports = convertToObject;
