'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
const SEMICOLON = ';';
const COLON = ':';

function convertToObject(sourceString) {
  const stylesArray = sourceString.split(SEMICOLON);

  const styleObject = stylesArray.reduce((temp, style) => {
    const separateStyle = style.split(COLON).map((part) => part.trim());

    if (separateStyle.length === 2) {
      temp[separateStyle[0]] = separateStyle[1];
    }

    return temp;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
