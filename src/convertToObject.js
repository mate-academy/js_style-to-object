'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let solution = {};
    const stringWithNoSpaces = sourceString.trim();
  const atributes = stringWithNoSpaces.split(';');
  for (const elements of atributes) {
    const [keys, values] = elements.split(':');
    solution[keys] = values;
  }

  return solution;
}

console.log(convertToObject(`
cursor: pointer;
float: left;
font-family: inherit;
font-size: 14px;
font-weight: 400;
height: 42px;
line-height: 40px;
outline: 0;`))

module.exports = convertToObject;
