'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const array = sourceString
    .split(';')
    .map((element) => {
      return element.trim();
    })
    .filter((element) => {
      return element !== '';
    })
    .map((element) => {
      return element
        .split(':')
        .map((item) => item.trim())
        .filter((item) => item !== '');
    });
  const obj = {};

  for (const arrayElement of array) {
    const [key, value] = arrayElement;

    obj[key] = value;
  }

  return obj;
}

module.exports = convertToObject;
