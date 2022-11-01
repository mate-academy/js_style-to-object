'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArr = sourceString.split(';');
  const stylesObj = {};

  const stylesItem = stylesArr
    .map(item => item
      .trim()
      .split(':'))
    .filter(element => (element[1] !== undefined));

  stylesItem.forEach(element => {
    stylesObj[element[0].trim()] = element[1].trim();
  });

  return stylesObj;
}

module.exports = convertToObject;
