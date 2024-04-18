'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
// first solution
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((stylesObject, style) => {
    if (style.trim() !== '') {
      const [key, value] = style.split(':').map((item) => item.trim());

      stylesObject[key] = value;
    }

    return stylesObject;
  }, {});
}
// second solution;
// function convertToObject(sourceString) {
// const stylesArray = sourceString.split(';');
// const stylesObject = {};

// stylesArray.forEach((style) => {
//   if (style.trim() !== '') {
//     const [key, value] = style.split(':').map((item) => item.trim());

//     stylesObject[key] = value;
//   }
// });

// return stylesObject;
// }

module.exports = convertToObject;
