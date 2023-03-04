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
  let arrCSS = sourceString.split(';\n');
  const styles = {};

  arrCSS = arrCSS.filter(cssProperty => cssProperty.includes(':'));

  arrCSS.forEach(cssProperty => {
    const [property, value] = cssProperty.split(':');

    styles[property.trim()] = value.trim();
  });

  return styles;
}

module.exports = convertToObject;
