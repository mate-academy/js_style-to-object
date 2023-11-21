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
  const styleObject = {};
  const splitString = sourceString
    .split(';')
    .filter(item => item.includes(':'));

  if (splitString.length === 0) {
    return 'Data is null';
  }

  splitString.forEach(element => {
    const splitArray = element.split(':');
    const [ key, value ] = splitArray;

    styleObject[key.trim()] = value.trim();
  });

  return styleObject;
}

module.exports = convertToObject;
