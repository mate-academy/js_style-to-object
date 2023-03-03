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
  const arrayOfStrings = sourceString.split(';')
    .filter(item => item && item !== '\n')
    .map(item => item.replace('\n', ''));

  const stringToObject = arrayOfStrings.reduce((prev, element) => {
    return {
      ...prev,
      [element.slice(0, element.indexOf(':')).trim()]:
      (element.slice(element.indexOf(':') + 1).trim()),
    };
  }, {});

  const key = '';

  delete (stringToObject[key]);

  return stringToObject;
}

module.exports = convertToObject;
