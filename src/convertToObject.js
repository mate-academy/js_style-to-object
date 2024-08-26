'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
const SEMICOLON = ';';
const COLON = ':';

function convertToObject(sourceString) {
  const styles = sourceString.split(SEMICOLON);

  const stylesObject = styles.reduce((temp, style) => {
    const separateStyle = style.split(COLON).map((part) => part.trim());

    if (separateStyle.length === 2) {
      temp[separateStyle[0]] = separateStyle[1];
    }

    return temp;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
