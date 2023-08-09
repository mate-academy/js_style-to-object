'use strict';

const LINE_TERMINATOR = ';';
const PROP_VALUE_SEPARATOR = ':';
const EMPTY_STRING = '';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(LINE_TERMINATOR)
    .map((entry) => entry.trim())
    .filter((entry) => entry !== EMPTY_STRING)
    .reduce((styleObj, entry) => {
      const [property, value] = entry.split(PROP_VALUE_SEPARATOR);

      styleObj[property.trim()] = value.trim();

      return styleObj;
    }, {});
}

module.exports = convertToObject;
