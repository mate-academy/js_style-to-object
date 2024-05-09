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
    const nameStyle = style.split(':');

    if (nameStyle[0].trim() !== '') {
      objStyles[nameStyle[0].trim()] = nameStyle[1].trim();
    }
  }

  return objStyles;
}

module.exports = convertToObject;
