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
  const trimmer = element => element.trim();

  const stylesSplitTrimmed = sourceString
    .split(';')
    .map(trimmer)
    .filter(Boolean);

  const stylesNoSpacesPairs = stylesSplitTrimmed
    .map(item => item.split(':')
      .map(trimmer));

  const stylesOutputObject = Object.fromEntries(stylesNoSpacesPairs);

  return stylesOutputObject;
}

module.exports = convertToObject;
