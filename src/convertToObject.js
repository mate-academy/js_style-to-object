'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const newArray = sourceString.split(';');

  newArray.forEach((element) => {
    const newElement = element.trim();

    if (newElement.length === 0) {
      return;
    }

    if (!newElement.includes(':')) {
      return;
    }

    const keyValue = newElement.split(':');
    const key = keyValue[0].trim();
    const value = keyValue.slice(1).join(':').trim();

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
