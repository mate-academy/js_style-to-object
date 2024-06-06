'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const finalObject = {};

  sourceString.split(';').forEach((line) => {
    const cssValue = line.split(':');

    if (cssValue[0] && cssValue[1]) {
      finalObject[cssValue[0].trim()] = cssValue[1].trim();
    }
  });

  return finalObject;
}

module.exports = convertToObject;
