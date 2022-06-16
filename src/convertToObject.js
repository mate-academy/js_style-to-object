'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let arrayFromSourceString = sourceString.split(';');

  arrayFromSourceString = arrayFromSourceString
    .map(element => element.split(':'))
    .map(element => element.map(part => part.trim()))
    .filter(element => element.length > 1);

  const callback = (prev, element) => ({
    ...prev,
    [element[0]]: element[1],
  });

  const objectFromSourceString = arrayFromSourceString.reduce(callback, {});

  return objectFromSourceString;
}

module.exports = convertToObject;
