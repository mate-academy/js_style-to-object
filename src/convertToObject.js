'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const ENTRY_SEPARATOR = ';';
  const KEY_VALUE_SEPARATOR = ':';

  const styleEntries = sourceString.split(ENTRY_SEPARATOR);
  const styleObject = {};

  styleEntries.forEach((entry) => {
    let [key, value] = entry.split(KEY_VALUE_SEPARATOR);

    if (value) {
      key = key.trim();
      value = value.trim();
      styleObject[key] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
