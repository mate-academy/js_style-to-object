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
  const arrFromString = sourceString.split(';');
  const splitedArr = arrFromString.map(value => value.split(':'));
  const removeFake = splitedArr.filter(value => value.length > 1);
  const result = removeFake.reduce((prev, item) => {
    return {
      ...prev,
      [item[0].trim()]: item[1].trim(),
    };
  }, {});

  return result;
}

module.exports = convertToObject;
