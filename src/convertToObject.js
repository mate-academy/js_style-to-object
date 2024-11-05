'use strict';

/*
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((prev, oneStyle) => {
    if (!oneStyle.trim()) {
      return prev;
    }

    const [property, value] = oneStyle.split(':');

    if (property && value) {
      prev[property.trim()] = value.trim();
    }

    return prev;
  }, {});
}

module.exports = convertToObject;
