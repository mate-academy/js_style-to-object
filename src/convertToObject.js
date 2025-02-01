'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  const styleObject = {};
  const styleArray = styles.split(';');

  styleArray.forEach((style) => {
    const [key, value] = style.split(':').map((item) => item.trim());

    if (key && value) {
      styleObject[key] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
