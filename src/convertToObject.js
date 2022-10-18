'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
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
  const properties = sourceString
    .split(';')
    .map(element => {
      if (typeof element === 'string') {
        return element.trim();
      }
    })
    .filter(element => {
      return element !== '';
    });

  const obj = {};

  for (let i = 0; i < properties.length; i++) {
    const splitItem = properties[i]
      .split(':')
      .map(element => {
        return element.trim();
      });

    obj[splitItem[0]] = splitItem[1];
  }

  return obj;
}

module.exports = convertToObject;
