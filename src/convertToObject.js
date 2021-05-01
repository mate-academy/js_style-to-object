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
  const stylesList = sourceString.split('\n');

  const stylesObj = {};

  stylesList.forEach((style, ind, arr) => {
    arr[ind] = style.split(':');

    if (arr[ind].length > 1) {
      arr[ind][0] = arr[ind][0].trim();
      // console.log(arr[ind][1]);
      arr[ind][1] = arr[ind][1].slice(0, arr[ind][1].length - 1).trim();
    } else {
      arr[ind][0] = arr[ind][0].trim();
    }
    stylesObj[arr[ind][0]] = arr[ind][1];
  });

  delete stylesObj[''];
  delete stylesObj[';'];

  return stylesObj;
}

module.exports = convertToObject;
