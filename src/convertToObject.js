'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayCreate = sourceString.split(';');

  return arrayCreate.reduce((result, el) => {
    const [key, value] = el.split(':').map((text) => text.trim());

    if (key) {
      result[key] = value;
    }

    return result;
  }, {});
}

module.exports = convertToObject;
