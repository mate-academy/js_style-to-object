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
  const styleList = sourceString
    .split(';')
    .filter(string => string.trim().length !== 0)
    .map(string => string.split(':'));

  const stylesObj = styleList.reduce((obj, [styleProp, styleValue]) => {
    obj[styleProp.trim()] = styleValue.trim();

    return obj;
  }, {});

  return stylesObj;
}

module.exports = convertToObject;
