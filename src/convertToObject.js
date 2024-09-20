'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString
    .replaceAll('\t', '')
    .split(';')
    .reduce((prev, element) => {
      const elements = element.split(':');
      let key = elements[0];
      const value = elements[1];

      key = key.replaceAll(' ', '').replaceAll('\n', '');

      if (key.length === 0) {
        return prev;
      }

      prev[key] = value.trim();

      return prev;
    }, {});

  return sourceArray;
}

module.exports = convertToObject;
