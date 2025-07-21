'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const separateStyles = sourceString.split(';');
  const mapStyles = separateStyles.map((style) => {
    const [property, value] = style.split(':');

    return [property?.trim(), value?.trim()];
  });

  const convertedStyle = {};

  for (const style of mapStyles) {
    const key = style[0];
    const value = style[1];

    if (key && value !== undefined) {
      convertedStyle[key] = value;
    }
  }

  return convertedStyle;
}

module.exports = convertToObject;
