'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringToObject = {};

  sourceString.split(';').forEach((style) => {
    const [prop, value] = style.trim().split(':');

    if (prop && value) {
      stringToObject[prop.trim()] = value.trim();
    }
  });

  return stringToObject;
}

module.exports = convertToObject;
