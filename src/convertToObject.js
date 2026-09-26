'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayString = sourceString.split(';');

  return arrayString.reduce((styles, el) => {
    const [key, value] = el.split(':');

    if (key && value) {
      styles[key.trim()] = value.trim();
    }

    return styles;
  }, {});
}

module.exports = convertToObject;
