'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const arrayFromSource = sourceString.split(';');
  const callback = (element, index, arr) => {
    arr[index] = element.replaceAll('\n', '').trim();
  };
  arrayFromSource.forEach(callback);
  const shrunkArray = arrayFromSource.filter((el) => el.length > 4);
  const resultObect = {};
  const callback1 = (element, index, arr) => {
    const newArray = element.split(':');
    const key = newArray[0].trim();
    const value = newArray[1].trim().replaceAll(',', ',\n');
    resultObect[key] = value;
  };

  shrunkArray.forEach(callback1);
  return resultObect;
}

module.exports = convertToObject;
