'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const arrayOfSourceString = sourceString.split(';');
  const correctArrayOfSourceString = [];

  for (const element of arrayOfSourceString) {
    if (element === '') {
      continue;
    }
    correctArrayOfSourceString.push(element.split(':'));
  }

  const objOfSourceString = correctArrayOfSourceString.reduce((prev, elem) => {
    if (!elem[1]) {
      return prev;
    }

    return {
      ...prev,
      [elem[0]]: elem[1],
    };
  }, {});

  for (const key in objOfSourceString) {
    if (!objOfSourceString[key]) {
      continue;
    } else {
      result[key.trim()] = objOfSourceString[key].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
