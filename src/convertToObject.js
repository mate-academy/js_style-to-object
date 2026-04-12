'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArr = sourceString.split(';');
  const finallSortedObject = {};

  sourceArr.forEach((element, index, arr) => {
    const [key, value] = element.split(':');

    if (key && value) {
      finallSortedObject[key.trim()] = value.trim();
    }
  });

  return finallSortedObject;
}

module.exports = convertToObject;
