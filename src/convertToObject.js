'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = {};
  const array = sourceString.split(';');

  array.forEach(element => {
    const item = element.split(':');

    if (item[1]) {
      object[item[0].trim()] = item[1].trim();
    }
  });

  return object;
}

module.exports = convertToObject;
