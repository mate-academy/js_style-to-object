'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObject = {};

  sourceString
    .split(';')
    .map((el) => {
      const [prop, value] = el
        .trim()
        .split(':', 2)
        .filter((frag) => frag !== '');

      if (prop && value) {
        return { [prop.trim()]: value.trim() };
      }
    })
    .forEach((item) => Object.assign(newObject, item));

  return newObject;
}

module.exports = convertToObject;
