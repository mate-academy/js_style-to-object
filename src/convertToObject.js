'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';').filter(Boolean);

  const stylesObject = stylesArray.reduce((acc, style) => {
    const [property, value] = style.split(':').map((s) => s.trim());

    if (property && value) {
      acc[property] = value;
    }

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
