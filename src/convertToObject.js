'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  return sourceString

    .split(';')
    .map(item => item.trim())
    .filter(item => item.length > 0)

    .reduce((styleObject, style) => {
      const [key, value] = style.split(':').map(v => v.trim());

      styleObject[key] = value;

      return styleObject;
    }, {}
    );
}

module.exports = convertToObject;
