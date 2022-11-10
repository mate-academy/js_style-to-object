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
  let key;
  let value;
  let styles = {};
  const arrStyles = sourceString.split(';');

  arrStyles.forEach(style => {
    [key, value] = style.replace('/n', '').split(':');

    if (value !== undefined) {
      styles = Object.assign(styles, { [key.trim()]: value.trim() });
    }
  });

  return styles;
}

module.exports = convertToObject;
