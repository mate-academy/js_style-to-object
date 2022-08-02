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
  // write your code here
  const obj = {};

  const array = sourceString.split(';');
  const correctedArray = array.map(elem => elem.trim());
  const withoutEmpty = correctedArray.filter(elem => elem.length > 0);
  const devided = withoutEmpty.map(elem => elem.split(':'));
  const devidedWithoutSpaces
  = devided.map(elem => elem.map(word => word.trim()));

  devidedWithoutSpaces.forEach((elem, i) => {
    obj[elem[0]] = elem[1];
  });

  return obj;
}

module.exports = convertToObject;
