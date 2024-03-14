'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const pairs = sourceString.split(';');
  const obj = {};

  pairs.forEach((pair) => {
    const [property, value] = pair.split(':').map((item) => item.trim());

    if (property && value) {
      obj[property] = value;
    }
  });

  return obj;
}

module.exports = convertToObject;
