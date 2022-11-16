'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');
  let colonPos;
  let leftPart;
  let rightPart;
  const returnedObj = {};
  const filteredArr = arr.filter((elem, index) => {
    return elem.includes(':');
  });

  for (let i = 0; i < filteredArr.length; i++) {
    colonPos = filteredArr[i].indexOf(':');
    leftPart = filteredArr[i].slice(0, colonPos);
    rightPart = filteredArr[i].slice(colonPos + 1);
    returnedObj[leftPart.trim()] = rightPart.trim();
  }

  return returnedObj;
}

module.exports = convertToObject;
