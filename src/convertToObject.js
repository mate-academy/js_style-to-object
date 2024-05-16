'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const splittedSource = sourceString
    .replaceAll(' ', '')
    .replaceAll('\n', '')
    .split(';');

  for (let i = 0; i < splittedSource.length; i++) {
    const [key, value] = splittedSource[i].split(':');

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
