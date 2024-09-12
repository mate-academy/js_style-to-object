'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const cssStyle = sourceString.split(';');

  cssStyle.forEach((style) => {
    const [key, value] = style.split(':').map((item) => item.trim());

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
