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
    const cleanStr = str.trim();
    const colonIndex = cleanStr.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const [property, value] = cleanStr.split(':').map((item) => item.trim());

    if (property && value) {
      styleObj[property] = value;
    }
  });

  return styleObj;
}

module.exports = convertToObject;
