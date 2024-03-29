'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = {};

  const separator = sourceString.split(';');

  separator.forEach((element) => {
    const trimPair = element.trim();

    if (trimPair) {
      const [key, value] = trimPair.split(':');
      const trimKey = key.trim();
      const trimValue = value.trim();

      object[trimKey] = trimValue;
    }
  });

  return object;
}

module.exports = convertToObject;
