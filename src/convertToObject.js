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
  const answer = {};
  const styleArray = sourceString.split(';');

  for (let i = 0; i < styleArray.length; i++) {
    styleArray[i] = styleArray[i].split(':');

    if (styleArray[i][0].trim() === '') {
      continue;
    }

    answer[styleArray[i][0].trim()] = styleArray[i][1].trim();
  }

  return answer;
}

module.exports = convertToObject;
