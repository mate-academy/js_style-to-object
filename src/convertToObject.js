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
  const strToArr = sourceString.split(';').filter(item => item.length > 4);

  const formattedArr = strToArr
    .map(element => element.split(':')
      .map(strItem => strItem.trim()));

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
