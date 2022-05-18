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
  const properties = sourceString.split(';');
  // (29)['\n  background-color:      #fff', '\n-webkit-border-radius: 5px',
  // '\n  border-radius     : 5px','\n  padding-left    : 18px',]
  const obj = {};

  for (let i = 0; i < properties.length; i++) {
    // console.log(properties[i]);
    // background-color:      #fff
    const arr = properties[i].split(':');
    // ['\n  padding-left    ', ' 18px']

    if (arr.length === 2) {
      const cut = arr.map(y => y.trim());
      // [background-color: #fff]

      obj[cut[0]] = cut[1];
    }
  }

  return obj;
}

module.exports = convertToObject;

// ============================

// function convertToObject(sourceString) {
//   return sourceString.split(';').reduce((acc, rec) => {
//     const entries = rec.split(':');

//     return entries.length === 2
//       ? ({
//         ...acc, [entries[0].trim()]: entries[1].trim(),
//       })
//       : acc;
//   }, {});
// }
// =========================

// function convertToObject(sourceString) {
//   return sourceString.split(';').reduce((acc, rec) => {
//     const entries = rec.split(':');
//     if (entries.length === 2) {
//       const [key, value] = entries;
//       return {
//         ...acc, [key.trim()]: value.trim(),
//       };
//     }
//     return acc;
//   }, {});
// }
