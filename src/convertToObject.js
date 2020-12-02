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
  const parts = sourceString.split(';');
  const styles = {};
  let style;

  parts.forEach(pair => {
    style = pair.split(':');

    if (style[0] && style[1]) {
      styles[style[0].trim()] = style[1].trim();
    }
  });

  return styles;
}

module.exports = convertToObject;
