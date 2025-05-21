'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';').map((word) => word.trim());
  const cleanArray = arr
    .map((string) => string.replace(/^[\s;]+|[\s;]+$/g, ''))
    .filter((str) => str !== '');
  const toObject = cleanArray.reduce((arrCopy, item) => {
    const [key, value] = item.split(':');

    arrCopy[key.trim()] = value.trim();

    return arrCopy;
  }, {});

  return toObject;
}
module.exports = convertToObject;
