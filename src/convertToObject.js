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
      const [prop, value] = el.trim().split(':', 2);

      if (prop && value) {
        return { [prop.trim()]: value.trim() };
      }
    })
    .reduce(
      (parsedStyles, element) => Object.assign(parsedStyles, element),
      {},
    );
}

module.exports = convertToObject;
