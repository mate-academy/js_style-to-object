'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = {};

  const splittedSource = String(sourceString).split(';');

  splittedSource.forEach((item) => {
    const [key, value] = item.split(':');

    if (key && value) {
      object[key.trim()] = value.trim();
    }
  });

  return object;
}

module.exports = convertToObject;
