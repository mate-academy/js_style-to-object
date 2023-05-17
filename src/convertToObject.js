'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString.split(';').map(string =>
    string.trim()).filter(string =>
    string !== '').map(string => string.split(':')).forEach(string => {
    const [key, value] = string;

    stylesObject[key.trim()] = value.trim();
  });

  return stylesObject;
}

module.exports = convertToObject;
