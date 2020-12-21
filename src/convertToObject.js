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
  const stylesList = sourceString
    .split(';')
    .map(styles => styles.split(':'));

  const finalStyles = stylesList.reduce(createObj, {});

  function createObj(prev, style) {
    if (style[0].trim() === '') {
      return prev;
    }

    prev[style[0].trim()] = style[1].trim();

    return prev;
  }

  return finalStyles;
}

module.exports = convertToObject;
