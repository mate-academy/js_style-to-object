'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
// function convertToObject(sourceString) {
//   const noSpaces = sourceString.split(';');

//   const result = noSpaces.reduce((type, element) => {
//     const parts = element.split(':').map((part) => part.trim());

//     type[parts[0]] = parts[1];

//     return type;
//   }, {});

//   return result;
// }

function convertToObject(sourceString) {
  return Object.fromEntries(
    sourceString
      .split(';')
      .map((line) => line.split(':').map((part) => part.trim()))
      .filter(([key, value]) => key && value),
  );
}

module.exports = convertToObject;
