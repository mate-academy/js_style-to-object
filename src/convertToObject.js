'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
// Через звичайний цикл це набагато простіше написати)

function convertToObject(sourceString) {
  const resultObject = {};

  const arrayString = sourceString.split(';')
    .map(element => element.split(':'))
    .map(item => item.map(subItem => subItem.trim()))
    .filter(value => value[0] !== '');

  arrayString.forEach(element => {
    resultObject[element[0]] = element[1];
  });

  return resultObject;
}

module.exports = convertToObject;
