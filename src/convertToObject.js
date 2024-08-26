'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(str) {
  const styleObject = {};

  str.split(';').forEach((el) => {
    const [property, value] = el.split(':');

    if (property && value) {
      styleObject[property.trim()] = value.trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
