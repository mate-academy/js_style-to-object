'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((styles, line) => {
    const [property, value] = line.split(':').map((part) => part.trim());

    if (property && value) {
      styles[property] = value;
    }

    return styles;
  }, {});
}

module.exports = convertToObject;
