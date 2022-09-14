'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const values = sourceString
    .split('\n')
    .map(string => string.replace(';', ''))
    .filter(string => string.trim() !== '');

  const result = {};

  const arrKey = values.map(item => item.split(':')[0].trim());
  const arrValue = values.map(item => item.split(':')[1].trim());

  for (let i = 0; i < arrKey.length; i++) {
    result[arrKey[i]] = arrValue[i];
  }

  return result;
}

module.exports = convertToObject;

// function convertToObject(sourceString) {
//   // write your code here
//   const values = sourceString.split(';');
//   const result = {};

//   for (let i = 0; i < values.length; i++) {
//     const str = values[i];

//     if (str.includes(':')) {
//       const [key, value] = str.split(':');

//       result[key.trim()] = value.trim();
//     }
//   }

//   return result;
// }
