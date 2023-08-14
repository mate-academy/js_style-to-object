'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';\n')
    .reduce((acc, cssStyle) => {
      const [key, value] = cssStyle.split(':').map(part => part.trim());

      if (key) {
        acc[key] = value;

        return acc;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
