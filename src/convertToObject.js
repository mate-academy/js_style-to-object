'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((el) => {
      const [prop, value] = el.trim().split(':');

      if (prop.length > 0) {
        return { [prop.trim()]: value.trim() };
      }
    })
    .reduce((result, element) => Object.assign(result, element), {});
}

module.exports = convertToObject;
