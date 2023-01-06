'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const containerStyle = {};

  const parameters = sourceString
    .split(';')
    .filter(rule => rule.includes(':'));

  parameters.forEach(parameter => {
    const parametrStyle = parameter.split(':').map(item => item.trim());

    containerStyle[parametrStyle[0]] = parametrStyle[1];
  });

  return containerStyle;
}
module.exports = convertToObject;
