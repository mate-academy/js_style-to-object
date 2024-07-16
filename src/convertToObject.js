'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((cssStyles, item) => {
    let [key, value] = item.split(':');

    if ((key, value)) {
      key = key.trim();
      value = value.trim();
      cssStyles[key] = value;
    }

    return cssStyles;
  }, {});
}

module.exports = convertToObject;
