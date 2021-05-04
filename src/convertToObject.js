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
  const transformInToArr = sourceString.split(';');
  const sortWithMap = transformInToArr.map(element => element.split(':'));
  const result = {};

  sortWithMap.map(element => {
    if (element[1] !== undefined) {
      result[element[0].trim()] = element[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
