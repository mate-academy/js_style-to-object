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
  const objWithCss = {};
  const convertedString = sourceString
    .replace(/\n/g, '')
    .replace(/\s+/g, ' ');
  const arrayWithCSS = [];
  let str = '';

  for (let i = 0; i < convertedString.length; i++) {
    if (convertedString[i] === ':' || convertedString[i] === ';') {
      arrayWithCSS.push(str.trim());
      str = '';
    } else {
      str += convertedString[i];
    }
  }

  const convertedArray = arrayWithCSS.filter(Boolean);

  for (let i = 0; i < convertedArray.length; i++) {
    objWithCss[convertedArray[i]] = convertedArray[i + 1];
    i += 1;
  }

  return objWithCss;
}

module.exports = convertToObject;
