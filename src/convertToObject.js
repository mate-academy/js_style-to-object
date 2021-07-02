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
  const strFormated = sourceString.replace(/\n/g, '');
  const arr = strFormated.split(';');
  const arrMap = arr.map(value => value.split(':'));
  const removeFake = arrMap.filter(value => value.length > 1);
  const arrMapTrimmed = removeFake.map(value =>
    [value[0].trim(), value[1].trim()]);
  const result = Object.fromEntries(arrMapTrimmed);

  return result;
}

module.exports = convertToObject;
