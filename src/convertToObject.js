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
  const convertedToObject = {};

  const TempArray = sourceString.split(';').map(item => item.trim());

  const TempArrayFiltred = TempArray.filter(item => item.length !== 0);

  const TempArrayOfArrayes = TempArrayFiltred
    .map(
      item => item.split(':').map(itemIn => itemIn.trim())
    );

  for (const ArrayCoupel of TempArrayOfArrayes) {
    convertedToObject[ArrayCoupel[0]] = ArrayCoupel[1];
  }

  return convertedToObject;
}

module.exports = convertToObject;
