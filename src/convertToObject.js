'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((styles, line) => {
    const [property, value] = line.split(':');

    if (property && value) {
      styles[property.trim()] = value.trim();
    }

    return styles;
  }, {});
}

module.exports = convertToObject;
