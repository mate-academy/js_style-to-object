'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styleObj = {};
  const parts = sourceString.split(';');

  parts.forEach((str) => {
    const [property, value] = str.split(':').map((item) => item.trim());

    if (property && value) {
      styleObj[property] = value;
    }
  });

  return styleObj;
}

module.exports = convertToObject;
