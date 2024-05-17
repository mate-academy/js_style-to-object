'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultArray = {};
  const splitString = sourceString.split(';');

  splitString.map((element) => {
    if (element.length >= 2) {
      const splitElement = element.split(':').map((item) => item.trim());

      resultArray[splitElement[0]] = splitElement[1];
    }
  });

  return resultArray;
}

module.exports = convertToObject;
