'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
const INITIAL_SEPARATOR = ';';
const KEY_VALUE_SEPARATOR = ':';

function convertToObject(sourceString) {
  return sourceString
    .split(INITIAL_SEPARATOR)
    .reduce((obj, element) => {
      const [key, value] = element
        .split(KEY_VALUE_SEPARATOR)
        .map(elemen => elemen.trim());

      if (key.length) {
        obj[key] = value;
      }

      return obj;
    }, {});
}

module.exports = convertToObject;
