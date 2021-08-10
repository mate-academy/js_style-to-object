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
  // write your code here
  const stringToArray = sourceString.split(';');

  const formattedArray = stringToArray
    .map(element => element
      .split(':')
      .map(stringItem => stringItem.trim()))
    .filter(item => item.length > 1);

  const arrToObject = formattedArray
    .reduce((previous, property) => {
      return {
        ...previous,
        [property[0]]: property[1],
      };
    }
    , {});

  return arrToObject;
}

module.exports = convertToObject;
