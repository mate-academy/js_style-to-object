'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objCss = {};

  sourceString
    .trim()
    .split(';')
    .forEach((element) => {
      const [property, value] = element.split(':').map((part) => part.trim());

      objCss[property] = value;
    });

  return objCss;
}

module.exports = convertToObject;
