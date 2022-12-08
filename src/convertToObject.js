'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  let newArray = sourceString.split(`;`);

  newArray = newArray.filter(el => el.length > 4);

  const newObject = {};

  newArray = newArray.map(el => {
    return el.split(':');
  });

  newArray = newArray.map(el => el.map(newEl => newEl.trim().split('\t\r\n')));

  for (let i = 0; i < newArray.length; i++) {
    newObject[`${newArray[i][0]}`] = newArray[i][1][0];
  }

  return newObject;
}

module.exports = convertToObject;
