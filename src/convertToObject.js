'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS propertie
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const filteredSourseString = sourceString
    .split(';')
    .map(style => style
      .split(':')
      .map(styleElement => styleElement
        .trim()))
    .filter(property => property.length > 1);

  const styleObj = Object.fromEntries(filteredSourseString);

  return styleObj;
}

module.exports = convertToObject;
