'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.match(/\S.*;/g);

  const converted = styles.reduce((css, style) => {
    const [property, value] = style
      .replace(/\s*(?=:)|(?<=:)\s*(?=\S)|\s*;/g, '').split(':');

    css[property] = value;

    return css;
  }, {});

  return converted;
}

module.exports = convertToObject;
