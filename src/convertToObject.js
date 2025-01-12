'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const newObject = {};
  const styles = sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style);

  styles.forEach((style) => {
    const [styleName, styleValue] = style.split(':').map((part) => part.trim());

    if (styleName && styleValue) {
      newObject[styleName] = styleValue;
    }
  });

  return newObject;
}

module.exports = convertToObject;
