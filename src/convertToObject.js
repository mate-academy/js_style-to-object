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
  const stylesObj = {};
  const keyValueArray = [];
  const stylesArray = sourceString.split(';');

  function fillObj(obj, e) {
    obj[e[0]] = e[1];
  }

  stylesArray.forEach(
    x => x.trim().length > 2
      ? keyValueArray.push(x.split(':'))
      : null);

  for (let i = 0; i < keyValueArray.length; i++) {
    keyValueArray[i][0] = keyValueArray[i][0].trim();
    keyValueArray[i][1] = keyValueArray[i][1].trim();
    fillObj(stylesObj, keyValueArray[i]);
  }

  return stylesObj;
}

module.exports = convertToObject;
