'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((styleObject, rule) => {
    const [property, value] = rule.split(':').map((part) => part.trim());

    if (property && value) {
      styleObject[property] = value;
    }

    return styleObject;
  }, {});
}

module.exports = convertToObject;
