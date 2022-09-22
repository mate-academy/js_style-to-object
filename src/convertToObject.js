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
function convertToObject(sourceString) {
  const styleObject = {};

  sourceString
    .split(';\n')
    .map((cut) =>
      cut.trim()).filter((line) => {
      return line !== '' && line !== ';';
    })
    .map((el) => {
      return el.split(':')
        .map((ele) => ele.trim());
    })
    .forEach((obj) => {styleObject[obj[0]] = obj[1]});

  return styleObject;
}

module.exports = convertToObject;
