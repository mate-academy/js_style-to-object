'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let tmpObj = {};
  const resultObj = {};

  const arrOfSourceString = sourceString.split(';');
  const clearArr = arrOfSourceString
    .map(str => str.trim().replace(/\n/g, ''))
    .map(str => str.split(':')
      .map(finalStr => finalStr.trim()));
  const clearArrOfStr = [];

  clearArr.forEach(prepare => clearArrOfStr.push(prepare.join()));

  const clearArrOfNotEmptyStr = clearArrOfStr.filter(str => str !== '');

  const arrOfStrCompleteForObj = [];

  clearArrOfNotEmptyStr.forEach(
    item => arrOfStrCompleteForObj.push(item.split(',')));

  arrOfStrCompleteForObj.forEach(item => {
    tmpObj = { [item[0]]: item[1] };

    Object.assign(resultObj, tmpObj);
  });

  return resultObj;
}

module.exports = convertToObject;
