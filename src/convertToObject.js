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
  const arrayFromString = sourceString.split(';');
  const convertArray = [];

  arrayFromString.forEach(element => {
    convertArray.push(element.trim());
  });

  for (let i = 0; i < convertArray.length; i++) {
    if (convertArray[i].length === 0) {
      convertArray.splice(i, 1);
      i -= 1;
    }
  }

  const finalArray = [];

  convertArray.forEach(element => {
    finalArray.push(element.split(':'));
  });

  const convertObject = {};

  finalArray.forEach(element => {
    convertObject[element[0].trim()] = element[1].trim();
  });

  return convertObject;
}

module.exports = convertToObject;
