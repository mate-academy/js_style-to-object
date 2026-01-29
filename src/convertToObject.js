'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .filter((style) => style.trim().length > 0);

  const stylesObj = styles.reduce((obj, style) => {
    const [key, value] = style.split(':');

    return {
      ...obj,
      [key.trim()]: value.trim(),
    };
  }, {});

  return stylesObj;
}

module.exports = convertToObject;
