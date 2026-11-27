'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convStringToArr = sourceString.split(';');
  let result = {};

  convStringToArr.forEach(function(element) {
    if (element.trim() === '') {
      return;
    }

    const [key, value] = element.split(':');

    result[key.trim()] = value.trim();
  })

  return result;
}

module.exports = convertToObject;
