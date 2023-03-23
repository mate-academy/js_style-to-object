'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .filter(style => style.includes(':'));

  return styles.reduce((stylesObject, stylesArr) => {
    const [styleName, styleValue] = stylesArr.split(':');

    stylesObject[styleName.trim()] = styleValue.trim();

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
