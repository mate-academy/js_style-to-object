'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const arr = sourceString.split(';');

  arr.forEach((el) => el.trim());

  const newArr = arr.filter((el) => el !== undefined);

  const newObj = {};

  newArr.forEach((el) => {
    const [key, value] = el.split(':');

    if (key && value) {
      newObj[key.trim()] = value.trim();
    }
  });

  return newObj;
}

module.exports = convertToObject;
