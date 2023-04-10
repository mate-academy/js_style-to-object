'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let cssArray = sourceString.replace(/(\r\n|\n|\r)/gm, '').split(';');

  for (let i = 0; i < cssArray.length; i++) {
    cssArray[i] = cssArray[i].trim();
  };

  cssArray = cssArray
    .map(el => el.split(':'))
    .filter(el => el.includes('') !== true);

  cssArray.forEach((el) => {
    el[0] = el[0].trim();
    el[1] = el[1].trim();
  });

  const cssObj = {};

  cssArray.map((el) => {
    cssObj[el[0]] = el[1];
  });

  return cssObj;
}

module.exports = convertToObject;
