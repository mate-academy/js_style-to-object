'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceStringParts = sourceString.split(';');
  const strWithoutSpaces = sourceStringParts.map((str) => str.trim());
  const result = strWithoutSpaces.reduce((prev, el) => {
    const [key, value] = el.split(':');

    if (key && value) {
      prev[key.trim()] = value.trim();
    }

    return prev;
  }, {});

  return result;
}

module.exports = convertToObject;
