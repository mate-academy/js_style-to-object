'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return Object.fromEntries(
    sourceString
      .split(';')
      .map((element) => element.trim())
      .filter((element) => element.length > 0 && element.includes(':'))
      .map((element) => {
        const colonIndex = element.indexOf(':');
        const property = element.slice(0, colonIndex).trim();
        const value = element.slice(colonIndex + 1).trim();

        return [property, value];
      }),
  );
}

// function convertToObject(sourceString) {
//   return Object.fromEntries(
//     sourceString
//       .split(';')
//       .map((item) => item.trim())
//       .filter((item) => item.length > 0)
//       .map((item) => {
//         const [key, value] = item.split(':');

//         return [key.trim(), value.trim()];
//       }),
//   );
// }

module.exports = convertToObject;
