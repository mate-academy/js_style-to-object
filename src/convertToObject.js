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
      return (string.trim() !== '' && string.includes(':'));
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
    .reduce((aggregate, keyValue) => {
      return {
        ...aggregate,
        ...keyValue,
      };
    }, {});
}

module.exports = convertToObject;
