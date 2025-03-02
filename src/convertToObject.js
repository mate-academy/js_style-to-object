'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const data = sourceString.split(';');
  const obj = {};

  for (let i = 0; i < data.length; i++) {
    const item = data[i].trim();

    if (item === '') {
      continue;
    }

    const value = item.split(':');

    if (value.length !== 2) {
      continue;
    }

    obj[value[0].trim()] = value[1].trim();
  }

  return obj;
}

module.exports = convertToObject;
