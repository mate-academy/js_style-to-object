'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitString = sourceString.split(';');
  const dictionary = {};

  splitString.forEach((element) => {
    const [key, value] = element.split(':').map((item) => item && item.trim());

    if ((key, value)) {
      dictionary[key] = value;
    }
  });

  return dictionary;
}

module.exports = convertToObject;
