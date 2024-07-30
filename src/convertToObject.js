'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const updatedArray = sourceString
    .split(';')
    .map((item) => {
      return item.split(':');
    })
    .filter((item) => item.length > 1)
    .map((item) => {
      return [item[0].trim(), item[1].trim()];
    });

  const finalObject = {};

  updatedArray.forEach((item) => (finalObject[item[0]] = item[1]));

  return finalObject;
}

module.exports = convertToObject;
