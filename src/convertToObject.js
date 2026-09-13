'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style.length)
    .map((style) => style.split(':').map((part) => part.trim()));

  return styles.reduce((stylesObject, style) => {
    return {
      ...stylesObject,
      [style[0]]: style[1],
    };
  }, {});
}

module.exports = convertToObject;
