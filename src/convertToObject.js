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
      const [property, value] = separateStyle;

      temp[property] = value;
    }

    return temp;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
