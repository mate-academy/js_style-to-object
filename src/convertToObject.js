'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';');

  const stylesObject = stylesArray.reduce((result, style) => {
    const [property, value] = style.split(':').map((str) => str.trim());

    if (property && value) {
      result[property] = value;
    }

    return result;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
