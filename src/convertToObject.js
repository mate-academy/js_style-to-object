'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesWithSpace = sourceString
    .split(';')
    .map(key => key
      .trim())
    .filter(key => key.length > 0)
    .map(key => key
      .split(':'));

  const styles = stylesWithSpace.map(key => key.map(kkey => kkey.trim()));

  const result = styles.reduce((prev, style) => {
    return {
      ...prev,
      [style[0]]: style[1],
    };
  },
  {});

  return result;
}

module.exports = convertToObject;
