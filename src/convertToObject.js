'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');
  const arrTrimmed = arr.map(function(item) {
    return item.replace(/^\s+|\s$/g, '');
  });
  const objStyle = {};
  for (let i = 0; i < arrTrimmed.length; i++) {
    const newArr = arrTrimmed[i].split(':');
    if (newArr[0] !== undefined && newArr[1] !== undefined) {
      objStyle[newArr[0]] = newArr[1].trim();
    }
  }
  return (objStyle);
}

module.exports = convertToObject;
