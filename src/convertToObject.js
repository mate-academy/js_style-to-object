'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const convertToArray = sourceString.split(';');
  const normalizedArray = convertToArray.map((item) => {
    return item.trim();
  });

  const createObject = normalizedArray.reduce((acc, item) => {
    const [key, value] = item.split(':').map((part) => part.trim());

    if (key && value) {
      acc[key] = value;
    }

    return acc;
  }, {});

  return createObject;
}

module.exports = convertToObject;
