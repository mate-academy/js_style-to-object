'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .replaceAll('\n', '')
    .split(';')
    .filter((string) => {
      return string.trim() !== '';
    })
    .map((objString) => {
      let [key, value] = objString.split(':');

      key = key.trim();

      if (value.includes(',')) {
        value = value.replaceAll(',', ',\n').trim();
      } else {
        value = value.trim();
      }

      return { [key]: value };
    })
    .reduce((agregate, keyValue) => {
      return {
        ...agregate,
        ...keyValue,
      };
    }, {});
}

module.exports = convertToObject;
