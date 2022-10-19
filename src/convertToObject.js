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
 * @param {string} resultStr
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let resultStr = sourceString;

  while (resultStr.includes('\n' || ' :' || ': ' || ' ;' || '  ')) {
    resultStr = resultStr.replace('\n', '');
    resultStr = resultStr.replace(' :', ':');
    resultStr = resultStr.replace(': ', ':');
    resultStr = resultStr.replace(' ;', ';');
    resultStr = resultStr.replace('; ', ';');
    resultStr = resultStr.replace('  ', ' ');
  }

  let resultArr = resultStr.split(';');

  resultArr = resultArr.filter(element => element !== '');
  resultArr = resultArr.map(item => item.trim());

  const resultObj = {};

  for (let i = 0; i < resultArr.length; i++) {
    const separator = resultArr[i].indexOf(':');
    const key = resultArr[i].substring(0, separator);
    const cssProperty
      = resultArr[i].substring(separator + 1, resultArr[i].length);

    resultObj[key] = cssProperty;
  }

  return resultObj;
}

module.exports = convertToObject;
