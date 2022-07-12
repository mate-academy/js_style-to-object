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
  const objectElements = {};
  const arreyElements = sourceString.replace(/\s+/g, ' ')
    .split(';').map(element => element.split(':').map(el => el.trim()));

  for (const element of arreyElements) {
    if (element[0] !== '' || element[0].length > 3) {
      objectElements[element[0]] = element[1];
    }
  }

  return objectElements;
}

module.exports = convertToObject;
