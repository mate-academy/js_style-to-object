'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const data = sourceString.split(';');
  const obj = {};

  data.forEach(function (i) {
    const item = i.trim();

    if (item === '') {
      return;
    }

    const value = item.split(':');

    if (value.length !== 2) {
      return;
    }

    obj[value[0].trim()] = value[1].trim();
  });

  return obj;
}

module.exports = convertToObject;
