'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *(see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');

  const withoutSpaces = styles.map(style => {
    let elems = style.split(':');

    elems = elems.map(element => element.trim());

    return elems;
  });

  const withoutEmpty = withoutSpaces.filter(style => style[0] !== '');

  return withoutEmpty.reduce(callback, {});
}

function callback(prev, curr) {
  return {
    ...prev,
    [curr[0]]: curr[1],
  };
}

module.exports = convertToObject;
