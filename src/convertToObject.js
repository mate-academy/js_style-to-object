'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfProperties = sourceString.split(';');
  let tempArr = [];
  const resultObj = {};

  arrayOfProperties.forEach(item => {
    tempArr = item.split(':');

    if (tempArr.length === 2) {
      resultObj[tempArr[0].trim()] = tempArr[1].trim();
    }
  });

  return resultObj;
}

module.exports = convertToObject;
