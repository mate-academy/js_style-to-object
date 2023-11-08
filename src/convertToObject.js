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

// new solution
function convertToObject(sourceString) {
  return sourceString
    .split('\n')
    .reduce((result, line) => {
      if (line.trim().length > 1) {
        const [property, value] = line.split(':');

        result[property.trim()] = value.replace(';', '').trim();
      }

      return result;
    }, {});
}

// old solution

// function convertToObject(sourceString) {
//   return sourceString
//     // splitting by new line
//     .split('\n')
//     // filtering out falsy values
//     .filter(Boolean)
//     // trimming ends od lines
//     .map(line => line.trim())
//     // filtering out lines with 1 char
//     .filter(line => line.length > 1)
//     // reducing the array into an object
//     .reduce((result, line) => {
//       // destructuring line into property and value variables
//       const [property, value] = line.split(':')
//         // getting rid of semicolon
//         .map(part => part.replace(';', '')
//           // trimming ends of tha property and value
//           .trim());

//       // assinging property and value to the result object
//       result[property] = value;

//       // returning the result object
//       return result;
//     // initValue for reduce method set to an empty object
//     }, {});
// }

module.exports = convertToObject;
