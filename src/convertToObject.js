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
  const styles = {};
  let splitedSource = sourceString.split(';');

  splitedSource = splitedSource.filter(str => str.includes(':'));

  splitedSource.forEach(style => {
    const splitedStyle = style.split(':');
    const key = `${splitedStyle[0].trim()}`;
    const value = `${splitedStyle[1].trim()}`;

    styles[key] = value;
  });

  return styles;
}

module.exports = convertToObject;
