'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stringForConvert) {
  const result = stringForConvert.trim().split(';');

  const resultObject = result
    .filter((element) => {
      if (element.includes(':')) {
        return element;
      }
    })
    .map((element) => {
      return element.split(':');
    })
    .reduce((object, element) => {
      return { ...object, [element[0].trim()]: element[1].trim() };
    }, {});

  return resultObject;
}

module.exports = convertToObject;
