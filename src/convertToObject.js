'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are
 *  keys
 * and values
 * are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styleSet = {};
  const styles = sourceString
    .split(';')
    .map(style => style.split(':')
      .map(styleEl => styleEl.trim()))
    .filter(elem => elem.length > 1 && elem !== undefined);

  styles.map(style => (styleSet[style[0]] = style[1]));

  return styleSet;
}

module.exports = convertToObject;
