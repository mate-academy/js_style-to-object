'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const updatedArray = sourceString.split(';');
  const finalObject = {};

  updatedArray.forEach((item) => {
    const [key, value] = item.split(':').map((el) => el.trim());

    if (key && value) {
      finalObject[key] = value;
    }
  });

  return finalObject;
}

module.exports = convertToObject;
