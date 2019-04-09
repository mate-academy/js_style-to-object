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
  let resultObj = {};
  let startArr = sourceString.split(';');
  let arr = startArr.map((item) => {
    item = item.trim();
    return item;
  });

  arr.pop();

  arr.forEach((item) => {
    let smallArr = item.split(': ');
    resultObj[`${smallArr[0]}`] = smallArr[1];
  });
  return resultObj;
}

module.exports = convertToObject;
