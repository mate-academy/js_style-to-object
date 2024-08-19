'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

// function convertToObject(sourceString) {
//   const obj = {};
//   const keyValuePairs = sourceString.trim().split(';');

//   keyValuePairs.forEach((el) => {
//     const [key, value] = el.split(':');

//     if (key && value) {
//       obj[key.trim()] = value.trim();
//     }
//   });

//   return obj;
// }

function convertToObject(sourceString) {
  const keyValuePairs = sourceString.trim().split(';');

  return keyValuePairs.reduce((acc, current) => {
    const [key, value] = current.split(':');

    if (key && value) {
      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
