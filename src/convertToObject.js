'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

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
