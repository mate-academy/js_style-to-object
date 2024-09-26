'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const letters = sourceString.split(';');
  const result = letters.reduce((accumulator, value, index) => {
    const params = value.split(':').map((element) => element.trim());

    accumulator[params[0]] = params[1];

    return accumulator;
  }, {});

  return result;
}

module.exports = convertToObject;
