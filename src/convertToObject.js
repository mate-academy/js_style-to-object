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
  const stylesObj = {};

  const stylesArray = sourceString.split(';');

  const prettyStylesArray
    = stylesArray.map(
      s => s.replace(/\s\s+/g, ' ')
        .trim())
      .filter(s => s);

  prettyStylesArray.map(
    s => s.replace(/\s+(:)/g, ':'));

  function fillObj(obj, element) {
    obj[element.split(':')[0].trim()] = element.split(':')[1].trim();
  }

  prettyStylesArray.forEach(
    s =>
      fillObj(stylesObj, s));

  return stylesObj;
}

module.exports = convertToObject;
