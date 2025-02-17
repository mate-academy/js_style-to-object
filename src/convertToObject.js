'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((item) => {
      const [name, value] = item.split(':');

      return name && value;
    })
    .reduce((acc, item) => {
      const [name, value] = item.split(':');

      acc[name.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
