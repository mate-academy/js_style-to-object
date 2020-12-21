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
  const arrayStyles = sourceString
    .split(';')
    .map(styles => styles.split(':')
      .map(elements => elements.trim()));

  const obsStyles = arrayStyles.reduce(createObj, {});

  function createObj(obj, style) {
    if (style[0] === '') {
      return obj;
    }

    obj[style[0]] = style[1];

    return obj;
  }

  return obsStyles;
}

module.exports = convertToObject;
