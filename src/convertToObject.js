'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const arrStyle = sourceString.replaceAll('\n', '').split(';');

  return arrStyle
    .filter((item) => item.trim() !== '')
    .map((item) => {
      const itemToArr = item.split(':');

      if (itemToArr[0].includes('box-shadow')) {
        itemToArr[1] = itemToArr[1].replaceAll(',', ',\n');
      }

      return {
        [itemToArr[0].trim()]: itemToArr[1].trim(),
      };
    })
    .reduce((current, item) => {
      return {
        ...current,
        ...item,
      };
    }, {});
}

module.exports = convertToObject;
