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
function convertToObject(stylesString) {
  const styles = stylesString.split(';');

  return styles.reduce((css, rule) => {
    const normalizedRule = rule.trim();

    if (normalizedRule !== '') {
      const [property, value] = normalizedRule.split(':');

      css[property.trim()] = value.trim();
    }

    return css;
  }, {});
}

module.exports = convertToObject;
