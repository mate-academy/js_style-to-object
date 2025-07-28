'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const convertedString = sourceString.split(';');
  const dataObject = {};

  convertedString.forEach((item) => {
    if (!item.trim()) {
      return;
    }

    const keyValue = item.split(':');

    if (keyValue.length === 2) {
      const key = keyValue[0].trim();
      const value = keyValue[1].trim();

      dataObject[key] = value;
    }
  });

  return dataObject;
}

module.exports = convertToObject;
