'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newArr = sourceString
    .split(';')
    .map((el) => el.trim())
    .map((el) => {
      const parts = el.split(':');

      return parts.map((part) => part.trim());
    })
    .filter((element) => element[0] !== '');

  const resultObject = {};

  newArr.forEach((element) => {
    const [key, value] = element;

    resultObject[key] = value;
  });

  return resultObject;
}

module.exports = convertToObject;
