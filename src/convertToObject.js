'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  const styles = sourceString.split(';');

  styles.forEach((style) => {
    const trimmedStyle = style.trim();

    if (!trimmedStyle) {
      return;
    }

    const colonIndex = trimmedStyle.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = trimmedStyle.slice(0, colonIndex).trim();
    const value = trimmedStyle.slice(colonIndex + 1).trim();

    stylesObject[property] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
