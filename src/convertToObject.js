'use strict';

const STYLES_SPLITTER = ';';
const STYLE_KEY_VALUE_SPLITTER = ':';

function convertToObject(sourceString) {
  return sourceString
    .trim()
    .split(STYLES_SPLITTER)
    .reduce((styles, stylePair) => {
      const [key, value] = stylePair.split(STYLE_KEY_VALUE_SPLITTER);

      if (key && value) {
        styles[key.trim()] = value.trim();
      }

      return styles;
    }, {});
}

module.exports = convertToObject;
