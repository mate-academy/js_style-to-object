'use strict';

/**
 * Implement convertToObject function:
 *

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const sourceArr = sourceString
    .split(';\n')
    .filter((string) => string.includes(':'));

  sourceArr.forEach((style) => {
    const styleArray = style.split(':');
    const key = styleArray[0].trim();
    const styleValueSet = new Set(styleArray[1].split(' '));

    styleValueSet.delete('');

    const styleValueArr = [...styleValueSet];

    styleObject[key] = styleValueArr.join(' ');
  });

  return styleObject;
}

module.exports = convertToObject;
