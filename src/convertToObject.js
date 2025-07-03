'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(complexStylesString) {
  const splitString = complexStylesString.split(';');

  const trimmedArray = splitString
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  const result = {};

  trimmedArray.map((item) => {
    const [key, ...rest] = item.split(':');
    const value = rest.join(':').trim();

    result[key.trim()] = value;
  });

  return result;
}

module.exports = convertToObject;
