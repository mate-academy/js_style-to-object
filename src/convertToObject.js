'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length < 1) {
    return {};
  }

  const sourceElements = sourceString.split(';');

  const sourceObject = sourceElements
    .map((el) => el.trim())
    .filter((el) => el.length > 0)
    .reduce((obj, el) => {
      const [key, value] = el.split(':');

      obj[key.trim()] = value.trim();

      return obj;
    }, {});

  return sourceObject;
}

module.exports = convertToObject;
