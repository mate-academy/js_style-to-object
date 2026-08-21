/* eslint-disable no-shadow */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const cssStyle = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  const result = {};

  cssStyle.forEach((item) => {
    const [key, value] = item.split(':').map((item) => item.trim());

    if (key && value) {
      result[key] = value;
    }
  });

  return result;
}

// or
// function convertToObject(sourceString) {
//   return sourceString
//     .split(';')
//     .reduce((result, line) => {
//       const [key, value] = line.split(':').map((item) => item.trim());

//       if (key && value) {
//         result[key] = value;
//       }

//       return result;
//     }, {});
// }
module.exports = convertToObject;
