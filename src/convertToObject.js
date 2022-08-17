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
  const objCss = {};

  const stylesArr = sourceString.split(';');

  stylesArr.forEach(str => {
    const currenValue = str.split(':');

    if (currenValue[1]) {
      objCss[currenValue[0].trim()] = currenValue[1].trim();
    }
  });

  return objCss;
}

module.exports = convertToObject;
