'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convStringToArr = sourceString.split(';');
  const newObj = {};

  convStringToArr.forEach(function (element) {
    if (element.trim() === '') {
      return;
    }

    const [key, value] = element.split(':');

    newObj[key.trim()] = value.trim();
  });
 
  return newObj;
}

module.exports = convertToObject;
