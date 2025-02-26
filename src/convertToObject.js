'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const letters = sourceString.split(';');
  const result = letters.reduce((accumulator, value) => {
    const params = value.split(':').map((element) => element.trim());

    if (params.length === 2) {
      const [key, val] = params;

      accumulator[key] = val;
    }

    return accumulator;
  }, {});

  return result;
}

module.exports = convertToObject;
