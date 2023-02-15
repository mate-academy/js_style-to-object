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
// function convertToObject(sourceString) {
//   const str = sourceString;
//   let resultStr = '';
//   const obj = {};

//   for (const ch of str) {
//     resultStr += ch.trim();
//   }

//   const arr = resultStr.split(';');

//   arr.pop();

//   const resultArray = arr.map(item => item.split(':'));

//   const result = [].concat(...resultArray);

//   for (let i = 0; i < result.length; i += 2) {
//     if (result[i] === '') {
//       continue;
//     }
//     obj[result[i]] = result[i + 1];
//   }

//   return obj;
// }

function convertToObject(sourceString) {
  const obj = {};
  const array = sourceString.split(';').map(item => item.split(':'));

  const result = [].concat(...array);

  const resArray = result.map(item => item.trim());

  for (let i = 0; i < resArray.length; i += 2) {
    if (resArray[i] === '') {
      continue;
    }

    obj[resArray[i]] = resArray[i + 1];
  }

  return obj;
}

module.exports = convertToObject;
