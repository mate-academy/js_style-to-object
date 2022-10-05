'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  // divide string into array of properties strings
  const arr = sourceString.split(';');

  // divide each element of array into sub array [key, value]
  const arr2 = arr.map(el => el.split(':'));

  // format every element
  const arr3 = arr2.map(el => (el.map(subEl => subEl.trim())));

  // filter out wrong elements
  const arr4 = arr3.filter(el => el.length === 2);

  // fill the object with final values
  arr4.map(el => {
    obj[`${el[0]}`] = el[1];
  });

  return obj;
}

module.exports = convertToObject;
