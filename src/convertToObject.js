'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const css = sourceString.split(';');
  const obj = {};

  for (let i = 0; i < css.length; i++) {
    const style = css[i].trim().split(': ');
    obj[style[0]] = style[1];
  }

  return obj;
}

module.exports = convertToObject;
