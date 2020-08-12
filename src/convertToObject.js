'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */

// const obj = {};

// const props = stylesString.split(';');

// const arr = [];

// for (const prop of props) {
//   arr.push(prop.split(':'));
// }

// for (const prop of arr) {
//   if (prop[1] !== undefined) {
//     obj[prop[0].trim()] = prop[1].trim();
//   }
// }
// // console.log(arr[0]);
// console.log(obj);

function convertToObject(sourceString) {
  const obj = {};

  const props = sourceString.split(';');

  const arr = [];

  for (const prop of props) {
    arr.push(prop.split(':'));
  }

  for (const prop of arr) {
    if (prop[1] !== undefined) {
      obj[prop[0].trim()] = prop[1].trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
