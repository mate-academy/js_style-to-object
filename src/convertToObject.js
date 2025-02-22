'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((style) => style.trim() !== '')
    .map((style) => {
      const [key, value] = style.split(':').map((str) => str.trim());

      return { [key]: value };
    })
    .reduce((acc, cur) => Object.assign(acc, cur), {});
}

module.exports = convertToObject;
