'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((cssProperties, style) => {
    const [property, value] = style.split(':').map((item) => item.trim());

    if (property && value) {
      cssProperties[property] = value;
    }

    return cssProperties;
  }, {});
}

module.exports = convertToObject;
