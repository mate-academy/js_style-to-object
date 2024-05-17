'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};
  const splitString = sourceString.split(';');

  splitString.forEach((element) => {
    const splitElement = element.split(':').map((item) => item.trim());

    if (splitElement.length >= 2) {
      resultObject[splitElement[0]] = splitElement[1];
    }
  });

  return resultObject;
}

module.exports = convertToObject;
