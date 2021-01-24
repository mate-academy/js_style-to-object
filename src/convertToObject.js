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
function convertToObject(sourceString) {
  const cssOnly = {};
  const sourceStringArr = sourceString.split(';');
  const cssKeysAndValuesArr = sourceStringArr.map((item) => item.split(':'));

  for (const element of cssKeysAndValuesArr) {
    if (element[1]) {
      cssOnly[element[0].trim()] = element[1].trim();
    }
  }

  return cssOnly;
}

module.exports = convertToObject;

// function convertToObject(sourceString) {
//   // write your code here
//   const cssOnly = {};

//   sourceString.split(';').map(item => {
//     const [key, value] = item.split(':').map(word => word.trim());

//     if (key && value) {
//       return (cssOnly[key] = value);
//     }
//   });

//   return cssOnly;
// }
