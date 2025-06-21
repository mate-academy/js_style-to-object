'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObj = {};

  const splitted = sourceString.split(';');

  splitted.forEach((element) => {
    const splittedI = element.split(':').map((str) => str.trim());

    const [property, value] = splittedI;

    if (splittedI.length > 1) {
      newObj[property] = value;
    }
  });

  return newObj;
}

module.exports = convertToObject;
