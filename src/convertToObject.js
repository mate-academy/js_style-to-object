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
  const temp = sourceString.split(';\n');

  const trimmed = temp.map(element => {
    if (typeof element === 'string') {
      return element.trim();
    }
  });

  const noEmpty = trimmed.filter(element => {
    return element !== '';
  });

  const obj = {};

  for (let i = 0; i < noEmpty.length; i++) {
    const splitItem = noEmpty[i].split(':');

    const trimmedSplit = splitItem.map(element => {
      return element.trim();
    });

    obj[trimmedSplit[0]] = trimmedSplit[1];
  }

  return obj;
}

module.exports = convertToObject;
