'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesString = sourceString.split(';');
  const styles = stylesString.filter(style => style.trim())
    .map(style => style.trim())
    .map(style => style.split(':'))
    .map(style => style.join(''))
    .map(style => style.split(' '))
    .map(style => style.filter(style1 => style1 !== ''));

  const obj = {};

  styles.forEach((style) => {
    const name = style[0];
    let value = style[1];

    if (style[2]) {
      value = `${style[1]} ${style[2]}`;
    }

    if (style[2] && style[3]) {
      value = `${style[1]} ${style[2]} ${style[3]}`;
    }

    obj[name] = `${value}`;
  });

  return obj;
}

module.exports = convertToObject;
