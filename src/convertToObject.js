'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  // split full string by styles
  const splitStyles = sourceString.split(';');

  // split each style into it's components
  const styleParts = splitStyles.map((value) => {
    return value.split(':');
  });

  const styles = {};

  // trim spaces and assign to object
  styleParts.map((style) => {
    if (style.length > 1) {
      styles[style[0].trim()] = style[1].trim();
    }
  });

  return styles;
}

module.exports = convertToObject;
