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

    const [selector, value] = splittedI;

    if (splittedI.length > 1) {
      newObj[`${selector}`] = value;
    }

    return newObj;
  });

  return newObj;
}

module.exports = convertToObject;
