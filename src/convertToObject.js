'use strict';

/**
 * Implement convertToObject function:
 *

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const ROW_SPLITTER = ';\n';
  const KEY_VALUE_SPLITTER = ':';
  // const formatedStyle = {};
  const removedEmptySpaces = sourceString
    .split(ROW_SPLITTER)
    .filter((string) => string.includes(KEY_VALUE_SPLITTER));

  return removedEmptySpaces.reduce((formatedStyle, style) => {
    const keyAndValue = style.split(KEY_VALUE_SPLITTER);
    const key = keyAndValue[0].trim();
    const clearedStyle = keyAndValue[1].trim();

    formatedStyle[key] = clearedStyle;

    return formatedStyle;
  }, {});
}

module.exports = convertToObject;
