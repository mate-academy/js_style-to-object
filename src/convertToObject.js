'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrStyles = sourceString.split(';');

  const objStyles = {};

  for (const style of arrStyles) {
    const [key, value] = style.split(':').map((item) => item.trim());

    if (key) {
      objStyles[key] = value;
    }
  }

  return objStyles;
}

module.exports = convertToObject;
