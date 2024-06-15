'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styleString) {
  const styleArray = styleString.split(';');

  const styleObject = styleArray.reduce((acc, curr) => {
    const entry = curr.split(':').map((item) => item.trim());

    if (entry[0] && entry[1]) {
      acc[entry[0]] = entry[1];
    }

    return acc;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
