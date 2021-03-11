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
  const stylesList = sourceString.split(';');
  let styles = {};

  for (let i = 0; i < stylesList.length; i++) {
    const style = stylesList[i].split(': ').map(el => el.trim());

    if (style[0] && style[1]) {
      styles = {
        ...styles,
        [style[0]]: style[1],
      };
    }
  }

  return styles;
}

module.exports = convertToObject;
