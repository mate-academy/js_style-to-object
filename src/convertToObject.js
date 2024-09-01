'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resObj = {};
  const arrayWithoutSpaces = sourceString.trim().split(';');

  arrayWithoutSpaces.forEach((item) => {
    const [key, value] = item.split(':').map((str) => str.trim());

    if (key && value) {
      resObj[key] = value;
    }
  });

  return resObj;
}

module.exports = convertToObject;
