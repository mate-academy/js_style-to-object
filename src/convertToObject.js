'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((result, style) => {
    const [prop, value] = style.split(':').map((x) => x.trim());

    if (prop && value) {
      result[prop] = value;
    }

    return result;
  }, {});
}

module.exports = convertToObject;
