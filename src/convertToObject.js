'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
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

  arr.forEach((item) => {
    let smallArr = item.split(': ');
    if (smallArr[1]) {
      resultObj[`${smallArr[0]}`] = smallArr[1];
    }
  });
  return resultObj;
}

module.exports = convertToObject;
