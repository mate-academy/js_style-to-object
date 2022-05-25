'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObj = {};

  const cssArray = sourceString.split(';');
  const correctedArray = cssArray.map(elem => elem.trim());
  const withoutEmpty = correctedArray.filter(elem => elem.length > 0);
  const divided = withoutEmpty.map(elem => elem.split(':'));
  const dividedWithoutSpaces = divided.map(elem => elem.map(
    word => word.trim()));

  dividedWithoutSpaces.forEach((elem, i) => {
    cssObj[elem[0]] = elem[1];
  });

  return cssObj;
}

module.exports = convertToObject;
