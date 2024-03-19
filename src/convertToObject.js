'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((style) => style.split(':').map((str) => str.trim()))
    .reduce((stylesObject, [property, value]) => {
      return { ...stylesObject, [property]: value };
    }, {});
}

module.exports = convertToObject;

//  Implement a convertToObject function that takes a
// string with styles (see an example in stylesString.js)
//  and returns an object where CSS declarations
// are converted to keys and values (see an example in the test file)
