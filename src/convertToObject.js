// 'use strict';

// // const complexStylesString = require('./stylesString');
// const complexStylesString = 'padding: 20px';

// /**
//  * @param {string} sourceString
//  *
//  * @return {object}
//  */

// function convertToObject(sourceString) {
//   const obj = {};

//   let key = '';
//   let value = '';

//   // Create array of text lines, filtering out empty lines
//   let lines = sourceString.split('\n').filter((line) => line.trim());
//   // sentinel values
//   let firstCharIndex = -2;
//   let colonIndex = -2;
//   let semicolonIndex = -2;

//   let concatLine = '';

//   for (const line of lines) {
//     // skip lines with no alphabetical value
//     if (!/[a-zA-Z:;]/.test(line)) {
//       continue;
//     }

//     concatLine += line;

//     const tmpFirstCharIndex = concatLine.indexOf(concatLine.trim());
//     if (firstCharIndex === -2 && tmpFirstCharIndex !== -1) {
//       firstCharIndex = tmpFirstCharIndex;
//     }

//     const tmpColonIndex = concatLine.indexOf(':');
//     if (colonIndex === -2 && tmpColonIndex !== -1) {
//       colonIndex = tmpColonIndex;
//     }

//     const tmpSemicolonIndex = concatLine.indexOf(';');
//     if (semicolonIndex === -2 && tmpSemicolonIndex !== -1) {
//       semicolonIndex = tmpSemicolonIndex;
//       console.log(semicolonIndex);
//     }

//     if (firstCharIndex !== -2 && colonIndex !== -2 && semicolonIndex !== -2) {
//       key = concatLine.slice(firstCharIndex, colonIndex).trim();
//     }

//     if (colonIndex !== -2 && semicolonIndex !== -2) {
//       value = concatLine.slice(colonIndex + 1, semicolonIndex).trim();
//       obj[key] = value;
//       key = '';
//       value = '';
//       // restore sentinel values
//       firstCharIndex = -2;
//       colonIndex = -2;
//       semicolonIndex = -2;
//       concatLine = '';
//     }

//   }
//   console.log(obj);
//   return obj;
// }

const complexStylesString = require('./stylesString');

function convertToObject(sourceString) {
  const obj = {};

  // Split by semicolons to get individual rules, then filter out empty ones
  const rules = sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter(Boolean);

  rules.forEach((rule) => {
    const [key, ...valueParts] = rule.split(':').map((part) => part.trim());
    const value = valueParts.join(':'); // Rejoin value parts in case of pseudo-selectors like ":hover"

    if (key && value) {
      obj[key] = value;
    }
  });

  return obj;
}

convertToObject(complexStylesString);

module.exports = convertToObject;
