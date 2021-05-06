'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArrey = sourceString.split(';');
  const stylesObject = {};

  stylesArrey.forEach(item => {
    const style = item.split(':');

    if (style[0] !== undefined && style[1] !== undefined) {
      const key = style[0].trim();
      const property = style[1].trim();

      stylesObject[key] = property;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
