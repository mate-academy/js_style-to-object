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
  const stylesObject = {};

  sourceString
    .split(';')
    .map((element) => element
      .split(':')
      .map((element2) => element2.trim())
    ).forEach((element) => {
      if (element[0] !== '' && element[0] !== undefined) {
        stylesObject[element[0]] = element[1];
      }
    }
    );

  return stylesObject;
}
// const stylesObject = {};
// const s1 = sourceString.split(';');
// let s2;
// for (let i of s1) {
//   s2 = i.split(':')
//     .map((element) => element.trim());
//   if (s2[0] !== '' && s2[0] !== undefined) {
//     stylesObject[s2[0]] = s2[1];
//   }
// }
// return stylesObject;
module.exports = convertToObject;
