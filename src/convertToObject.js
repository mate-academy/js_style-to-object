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
// function convertToObject(sourceString) {
//   const stylesArray = sourceString
//     .split(';')
//     .map(style => style.trim())
//     .map(style => style.split(':'))
//     .map(style => style.map(st => st.trim()))
//     .filter(style => style.length === 2);

//   const styleObject = Object.fromEntries(stylesArray);

//   return styleObject;
// }

function convertToObject(sourceString) {
  const stylesArray = sourceString
    .split(';')
    .map(style => style.trim());

  const styleObject = {};

  for (const style of stylesArray) {
    const [key, value] = style
      .split(':')
      .map(st => st.trim());

    if (key && value) {
      styleObject[key] = value;
    }
  }

  return styleObject;
}

module.exports = convertToObject;
