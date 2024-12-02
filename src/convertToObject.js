'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styleArray = sourceString.split(';').filter(Boolean);

  const styleObject = {};

  styleArray.forEach((style) => {
    const [name, value] = style.split(':').map((item) => item.trim());

    if (name && value) {
      styleObject[name] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
