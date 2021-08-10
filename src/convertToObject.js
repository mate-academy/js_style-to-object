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
  const strToArray = sourceString.split(';');

  const formattedArr = strToArray
    .map(element => element
      .split(':')
      .map(strItem => strItem.trim()))
    .filter(item => item.length > 1);

  const arrToObj = formattedArr
    .reduce((prev, prop) => {
      return {
        ...prev,
        [prop[0]]: prop[1],
      };
    }
    , {});

  return arrToObj;
}

module.exports = convertToObject;
