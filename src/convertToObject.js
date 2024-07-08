'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitArray = sourceString.trim().split(';');
  const object = {};

  for (const item of splitArray) {
    if (item.trim().length > 0) {
      const resultItemSplit = item.split(':');
      const key = resultItemSplit[0].trim();
      const value = resultItemSplit[1].trim();

      object[key] = value;
    }
  }

  return object;
}

module.exports = convertToObject;
// window.addEventListener('load', function () {
//   function convertToObject(sourceString) {
//     let stringWithoutNewLines = complexStylesString.replace(/\n/g, '');
//     let splitArray = stringWithoutNewLines.trim().split(';');
//     let object = {};
//     for (let item of splitArray) {
//       if (item.length > 0) {

//         let resultItemSplit = item.split(':');

//         if (resultItemSplit[0] && resultItemSplit[1]) {
//           let key = resultItemSplit[0].trim();
//           let value = resultItemSplit[1].trim();

//           object[key] = value;
//         }

//       }
//     }

//     console.log(object);
//   }
//   convertToObject(complexStylesString)
// })
