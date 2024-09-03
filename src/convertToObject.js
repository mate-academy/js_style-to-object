'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString.split(';');

  const finalResult = {};

  result.forEach((element) => {
    const [key, value] = element.split(':');

    if (key && value) {
      finalResult[key.trim()] = value.trim();
    }
  });

  return finalResult;
}

module.exports = convertToObject;
