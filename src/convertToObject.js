'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of
 * related CSS properties (see an exampl in [test file](./c
 * onvertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const expectedObj = {};
  const arrWithoutSemicolon = sourceString.split(';');
  const arrWithoutSpaces = arrWithoutSemicolon.map(str => str.trim());
  const dividedArray = arrWithoutSpaces.map(item => item.split(':'));
  const targetArray = [];

  for (const item of dividedArray) {
    targetArray.push(item.map(str => str.trim()));
  }

  for (let i = 0; i < targetArray.length; i++) {
    if (targetArray[i].length > 1) {
      expectedObj[targetArray[i][0]] = targetArray[i][1];
    }
  }

  return expectedObj;
}

module.exports = convertToObject;
