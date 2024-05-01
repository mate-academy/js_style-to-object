'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const str = sourceString.split(';');
  const result = {};

  str.forEach((element) => {
    if (element.length >= 2) {
      const splitElement = element.split(':').map((item) => item.trim());

      result[splitElement[0]] = splitElement[1];
    }
  });

  return result;

}

module.exports = convertToObject;
