'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((styles, declaration) => {
    const [property, values] = declaration
      .split(':')
      .map((item) => item.trim());

    if (property && values) {
      styles[property] = values;
    }

    return styles;
  }, {});
}

module.exports = convertToObject;
