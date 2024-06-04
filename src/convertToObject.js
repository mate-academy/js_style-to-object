'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const result = {};
  const splited = sourceString.split(';');

  for (let i = 0; i < splited.length; i++) {
    const target = splited[i].split(':');

    if (target.length < 2) {
      continue;
    }

    const key = target[0].trim();
    const value = target[1].trim();

    if (key && value) {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
