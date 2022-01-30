'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let stringToArr = [];
  let stringWithoutSemicolon = '';
  let stringToArrClean = [];
  const rowCSSvalues = [];
  const objCSSvalues = {};

  stringWithoutSemicolon = (sourceString.split('').filter(item =>
    ((item !== ';') && (item !== ':'))).join(''));

  stringToArr = stringWithoutSemicolon.split('\n');
  stringToArrClean = stringToArr.filter(item => /\S/.test(item));

  for (let i = 0; i < stringToArrClean.length; i++) {
    rowCSSvalues[i] = (stringToArrClean[i].split('').filter(item =>
      ((item !== ';') && (item !== ':'))).join(''));
  }

  for (let i = 0; i < stringToArrClean.length; i++) {
    (rowCSSvalues[i] = (stringToArrClean[i].split(' ')
      .filter(item => item !== '')));
  }

  for (let i = 0; i < rowCSSvalues.length; i++) {
    const [ cssname, ...values ] = rowCSSvalues[i];

    objCSSvalues[cssname] = values.join(' ');
  }

  return (objCSSvalues);
}

module.exports = convertToObject;
