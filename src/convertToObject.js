'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, css) => {
    const [key, value] = css.split(':').map((rule) => rule.trim());

    if (key && value) {
      acc[key] = value;
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
