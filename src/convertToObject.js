'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';')
    .map(style => style.trim())
    .filter(style => style.length > 0);

  const callback = (arr, style) => {
    return {
      ...arr,
      [style.slice(0, style.indexOf(':')).trim()]:
      style.slice(style.indexOf(':') + 1).trim(),
    };
  };

  const object = styles.reduce(callback, {});

  return object;
}

module.exports = convertToObject;
