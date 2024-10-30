'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const string = sourceString.split(';');

  const result = {};

  string.forEach((el) => {
    const [key, value] = el.split(':').map((item) => item.trim());

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
