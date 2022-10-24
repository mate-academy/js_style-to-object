'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString
    .split(';')
    .filter(style => style.trim());

  const styles = sourceArray.map(style => style.split(':'));

  const callback = (prev, style) => {
    return {
      ...prev,
      [style[0].trim()]: style[1].trim(),
    };
  };

  const stylesObject = styles.reduce(callback, {});

  return stylesObject;
}

module.exports = convertToObject;
