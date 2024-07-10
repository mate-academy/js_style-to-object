'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styleObject = {};

  const styleArr = sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style !== '');

  styleArr.forEach((item) => {
    const [property, value] = item.split(':').map((style) => style.trim());

    styleObject[property] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
